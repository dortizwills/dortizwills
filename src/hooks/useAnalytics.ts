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
  const isActiveRef = useRef<boolean>(false);
  const inactivityTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  // Track page view with time tracking - only on actual navigation
  const trackPageView = async (url: string, title: string, sessionId?: string) => {
    if (!hasConsent || (!session && !sessionId) || url === '/analytics') return;

    const currentSessionId = sessionId || session?.sessionId;
    if (!currentSessionId) return;

    // Update time spent on previous page if this isn't the first page
    if (currentPageUrl !== url && session && currentPageUrl) {
      const timeSpent = Math.floor((Date.now() - currentPageStartTime) / 1000);
      if (timeSpent > 2) { // Only track if spent more than 2 seconds
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

    // Only track if this is actually a new page view
    if (currentPageUrl === url) return;

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

      // Update session page views (only increment if actually new)
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

  // Track link clicks
  const trackLinkClick = async (href: string, linkText: string) => {
    if (!hasConsent || !session || window.location.pathname === '/analytics') return;

    await trackEvent('link_click', {
      destination: href,
      link_text: linkText,
      source_page: window.location.pathname
    });
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

  // Track actual user activity and handle page exit
  useEffect(() => {
    if (!hasConsent || !session) return;

    const updateActivity = () => {
      lastActivityRef.current = Date.now();
      isActiveRef.current = true;
      
      // Reset inactivity timeout
      if (inactivityTimeoutRef.current) {
        clearTimeout(inactivityTimeoutRef.current);
      }
      
      // Set user as inactive after 2 minutes of no activity
      inactivityTimeoutRef.current = setTimeout(() => {
        isActiveRef.current = false;
      }, 2 * 60 * 1000);
    };

    // Track link clicks
    const handleLinkClick = (event: Event) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      if (link && link.href) {
        trackLinkClick(link.href, link.textContent || link.href);
      }
    };

    // Update time spent on current page when leaving
    const handleBeforeUnload = async () => {
      if (session && currentPageUrl) {
        const timeSpent = Math.floor((Date.now() - currentPageStartTime) / 1000);
        if (timeSpent > 2) { // Only track meaningful time
          try {
            await supabase
              .from('page_views')
              .update({ time_on_page: timeSpent })
              .eq('session_id', session.sessionId)
              .eq('page_url', currentPageUrl)
              .order('timestamp', { ascending: false })
              .limit(1);
            
            // Track page exit event
            await trackEvent('page_exit', {
              page_url: currentPageUrl,
              time_spent: timeSpent
            });
          } catch (error) {
            console.error('Failed to update time on page:', error);
          }
        }
      }
    };

    // Track visibility changes
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Page is hidden - track as potential exit
        if (session && currentPageUrl) {
          const timeSpent = Math.floor((Date.now() - currentPageStartTime) / 1000);
          if (timeSpent > 2) {
            trackEvent('page_hidden', {
              page_url: currentPageUrl,
              time_spent: timeSpent
            });
          }
        }
      } else {
        // Page is visible again
        updateActivity();
      }
    };

    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    events.forEach(event => {
      document.addEventListener(event, updateActivity, true);
    });

    // Listen for link clicks specifically
    document.addEventListener('click', handleLinkClick, true);
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Update session only when user is active (every 60 seconds instead of 30)
    const intervalId = setInterval(async () => {
      if (session && isActiveRef.current) {
        const duration = Math.floor((Date.now() - startTimeRef.current) / 1000);
        await supabase
          .from('visitor_sessions')
          .update({
            duration_seconds: duration,
            last_activity: new Date(lastActivityRef.current).toISOString()
          })
          .eq('session_id', session.sessionId);
      }
    }, 60000); // Reduced frequency

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, updateActivity, true);
      });
      document.removeEventListener('click', handleLinkClick, true);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (inactivityTimeoutRef.current) {
        clearTimeout(inactivityTimeoutRef.current);
      }
      clearInterval(intervalId);
    };
  }, [hasConsent, session, currentPageUrl, currentPageStartTime]);

  return {
    session,
    hasConsent,
    setConsent,
    trackPageView,
    trackEvent,
    trackLinkClick
  };
};