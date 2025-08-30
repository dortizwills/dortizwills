import { useEffect, useRef, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface AnalyticsSession {
  sessionId: string;
  startTime: number;
  lastActivity: number;
  pageViews: number;
}

interface VisitorInfo {
  userAgent: string;
  browser: string;
  device: string;
  os: string;
  referrer: string;
  landingPage: string;
}

export const useAnalytics = () => {
  const [session, setSession] = useState<AnalyticsSession | null>(null);
  const [hasConsent, setHasConsent] = useState<boolean>(false);
  const startTimeRef = useRef<number>(Date.now());
  const lastActivityRef = useRef<number>(Date.now());

  // Check for existing consent
  useEffect(() => {
    const consent = localStorage.getItem('analytics-consent');
    setHasConsent(consent === 'true');
  }, []);

  // Get visitor information
  const getVisitorInfo = (): VisitorInfo => {
    // Don't track analytics on the analytics page itself
    if (window.location.pathname === '/analytics') {
      return null;
    }
    
    const userAgent = navigator.userAgent;
    
    // Simple browser detection
    let browser = 'Unknown';
    if (userAgent.includes('Chrome')) browser = 'Chrome';
    else if (userAgent.includes('Firefox')) browser = 'Firefox';
    else if (userAgent.includes('Safari')) browser = 'Safari';
    else if (userAgent.includes('Edge')) browser = 'Edge';

    // Simple device detection
    let device = 'Desktop';
    if (/Mobile|Android|iPhone|iPad/.test(userAgent)) {
      device = /iPad/.test(userAgent) ? 'Tablet' : 'Mobile';
    }

    // Simple OS detection
    let os = 'Unknown';
    if (userAgent.includes('Windows')) os = 'Windows';
    else if (userAgent.includes('Mac')) os = 'macOS';
    else if (userAgent.includes('Linux')) os = 'Linux';
    else if (userAgent.includes('Android')) os = 'Android';
    else if (userAgent.includes('iOS')) os = 'iOS';

    return {
      userAgent,
      browser,
      device,
      os,
      referrer: document.referrer || 'Direct',
      landingPage: window.location.pathname
    };
  };

  // Initialize session
  const initializeSession = async () => {
    if (!hasConsent || window.location.pathname === '/analytics') return;

    const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const visitorInfo = getVisitorInfo();
    
    if (!visitorInfo) return;
    
    try {
      const { error } = await supabase
        .from('visitor_sessions')
        .insert([{
          session_id: sessionId,
          user_agent: visitorInfo.userAgent,
          browser: visitorInfo.browser,
          device: visitorInfo.device,
          os: visitorInfo.os,
          referrer: visitorInfo.referrer,
          landing_page: visitorInfo.landingPage,
          first_visit: new Date().toISOString(),
          last_activity: new Date().toISOString(),
          page_views: 1
        }]);

      if (error) throw error;

      const newSession: AnalyticsSession = {
        sessionId,
        startTime: Date.now(),
        lastActivity: Date.now(),
        pageViews: 1
      };

      setSession(newSession);
      startTimeRef.current = Date.now();
      lastActivityRef.current = Date.now();

      // Track initial page view
      await trackPageView(window.location.pathname, document.title, sessionId);
    } catch (error) {
      console.error('Failed to initialize analytics session:', error);
    }
  };

  const [currentPageStartTime, setCurrentPageStartTime] = useState<number>(Date.now());
  const [currentPageUrl, setCurrentPageUrl] = useState<string>(window.location.pathname);

  // Track page view with time tracking
  const trackPageView = async (url: string, title: string, sessionId?: string) => {
    if (!hasConsent || (!session && !sessionId) || url === '/analytics') return;

    const currentSessionId = sessionId || session?.sessionId;
    if (!currentSessionId) return;

    // Update time spent on previous page if this isn't the first page
    if (currentPageUrl !== url && session) {
      const timeSpent = Math.floor((Date.now() - currentPageStartTime) / 1000);
      if (timeSpent > 0) {
        try {
          await supabase
            .from('page_views')
            .update({ time_on_page: timeSpent })
            .eq('session_id', currentSessionId)
            .eq('page_url', currentPageUrl)
            .order('timestamp', { ascending: false })
            .limit(1);
        } catch (error) {
          console.error('Failed to update time on page:', error);
        }
      }
    }

    // Set new page tracking
    setCurrentPageUrl(url);
    setCurrentPageStartTime(Date.now());

    try {
      const { error } = await supabase
        .from('page_views')
        .insert([{
          session_id: currentSessionId,
          page_url: url,
          page_title: title,
          timestamp: new Date().toISOString(),
          time_on_page: 0
        }]);

      if (error) throw error;

      // Update session page views
      if (session) {
        const updatedSession = {
          ...session,
          pageViews: session.pageViews + 1,
          lastActivity: Date.now()
        };
        setSession(updatedSession);
        lastActivityRef.current = Date.now();

        // Update session in database
        await supabase
          .from('visitor_sessions')
          .update({
            page_views: updatedSession.pageViews,
            last_activity: new Date().toISOString(),
            duration_seconds: Math.floor((Date.now() - startTimeRef.current) / 1000)
          })
          .eq('session_id', currentSessionId);
      }
    } catch (error) {
      console.error('Failed to track page view:', error);
    }
  };

  // Track event
  const trackEvent = async (eventType: string, eventData?: any, pageUrl?: string) => {
    if (!hasConsent || !session || window.location.pathname === '/analytics') return;

    try {
      const { error } = await supabase
        .from('analytics_events')
        .insert([{
          session_id: session.sessionId,
          event_type: eventType,
          event_data: eventData || {},
          page_url: pageUrl || window.location.pathname,
          timestamp: new Date().toISOString()
        }]);

      if (error) throw error;
    } catch (error) {
      console.error('Failed to track event:', error);
    }
  };

  // Set consent
  const setConsent = (consent: boolean) => {
    localStorage.setItem('analytics-consent', consent.toString());
    setHasConsent(consent);
    
    if (consent) {
      initializeSession();
    } else {
      setSession(null);
    }
  };

  // Initialize session when consent is given
  useEffect(() => {
    if (hasConsent && !session) {
      initializeSession();
    }
  }, [hasConsent]);

  // Update last activity on user interaction and handle page unload
  useEffect(() => {
    if (!hasConsent || !session) return;

    const updateActivity = () => {
      lastActivityRef.current = Date.now();
    };

    // Update time spent on current page when leaving
    const handleBeforeUnload = async () => {
      if (session && currentPageUrl) {
        const timeSpent = Math.floor((Date.now() - currentPageStartTime) / 1000);
        if (timeSpent > 0) {
          // Use sendBeacon for reliable tracking on page unload
          const data = {
            session_id: session.sessionId,
            page_url: currentPageUrl,
            time_spent: timeSpent
          };
          navigator.sendBeacon('/api/track-time', JSON.stringify(data));
        }
      }
    };

    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    events.forEach(event => {
      document.addEventListener(event, updateActivity, true);
    });

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Update session duration every 30 seconds
    const intervalId = setInterval(async () => {
      if (session) {
        const duration = Math.floor((Date.now() - startTimeRef.current) / 1000);
        await supabase
          .from('visitor_sessions')
          .update({
            duration_seconds: duration,
            last_activity: new Date(lastActivityRef.current).toISOString()
          })
          .eq('session_id', session.sessionId);

        // Also update current page time periodically
        const timeSpent = Math.floor((Date.now() - currentPageStartTime) / 1000);
        if (timeSpent > 0 && currentPageUrl) {
          try {
            await supabase
              .from('page_views')
              .update({ time_on_page: timeSpent })
              .eq('session_id', session.sessionId)
              .eq('page_url', currentPageUrl)
              .order('timestamp', { ascending: false })
              .limit(1);
          } catch (error) {
            console.error('Failed to update page time:', error);
          }
        }
      }
    }, 30000);

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, updateActivity, true);
      });
      window.removeEventListener('beforeunload', handleBeforeUnload);
      clearInterval(intervalId);
    };
  }, [hasConsent, session, currentPageUrl, currentPageStartTime]);

  return {
    session,
    hasConsent,
    setConsent,
    trackPageView,
    trackEvent
  };
};