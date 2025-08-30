import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, RefreshCw, Clock, Users, Eye, Activity, Mail, Smartphone, Monitor, Tablet } from "lucide-react";
import { format } from "date-fns";
import PasswordProtection from '@/components/PasswordProtection';

interface AnalyticsData {
  totalVisitors: number;
  totalPageViews: number;
  activeUsers: number;
  averageSessionDuration: number;  
  contactLeads: number;
  topPages: { page: string; views: number }[];
  topPagesByTime: { page: string; totalTime: number; averageTime: number; views: number }[];
  allPages: { page: string; views: number; totalTime: number; averageTime: number }[];
  browserStats: { browser: string; count: number }[];
  deviceStats: { device: string; count: number }[];
  dailyStats: { date: string; visitors: number; pageViews: number }[];
  allVisitors: any[];
  activeUsersSessions: any[];
  recentActivity: {
    id: string;
    type: 'page_entry' | 'link_click' | 'page_exit' | 'page_hidden';
    timestamp: string;
    data: {
      page_url?: string;
      page_title?: string;
      destination?: string;
      link_text?: string;
      time_spent?: number;
      browser?: string;
      device?: string;
    };
  }[];
  contactLeadsList: any[];
}

const Analytics: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d' | 'custom'>('30d');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [customDateRange, setCustomDateRange] = useState<{
    startDate: Date | null;
    endDate: Date | null;
  }>({
    startDate: null,
    endDate: null
  });
  const [liveUpdates, setLiveUpdates] = useState(true);

  const fetchAnalyticsData = async () => {
    setLoading(true);
    try {
      let startDate: Date;
      let endDate = new Date();

      if (timeRange === 'custom') {
        if (!customDateRange.startDate || !customDateRange.endDate) {
          setLoading(false);
          return;
        }
        startDate = customDateRange.startDate;
        endDate = customDateRange.endDate;
      } else {
        const days = timeRange === '7d' ? 7 : timeRange === '30d' ? 30 : 90;
        startDate = new Date();
        startDate.setDate(startDate.getDate() - days);
      }

      // Fetch visitor sessions (excluding admin sessions - filter more broadly)
      const { data: allSessions, error: sessionsError } = await supabase
        .from('visitor_sessions')
        .select('*')
        .gte('first_visit', startDate.toISOString())
        .lte('first_visit', endDate.toISOString())
        .order('first_visit', { ascending: false });

      if (sessionsError) throw sessionsError;

      // Filter out admin sessions more thoroughly
      const sessions = allSessions?.filter(session => {
        const ua = session.user_agent?.toLowerCase() || '';
        return !ua.includes('daniel') && 
               !ua.includes('ortiz') && 
               !session.referrer?.includes('localhost') &&
               session.session_id !== 'admin';
      }) || [];

      // Fetch page views (only from non-admin sessions)
      const sessionIds = sessions?.map(s => s.session_id) || [];
      const { data: allPageViews, error: pageViewsError } = await supabase
        .from('page_views')
        .select('*')
        .gte('timestamp', startDate.toISOString())
        .lte('timestamp', endDate.toISOString())
        .in('session_id', sessionIds.length > 0 ? sessionIds : ['']);

      if (pageViewsError) throw pageViewsError;

      // Filter out analytics page views completely
      const pageViews = allPageViews?.filter(view => 
        !view.page_url.includes('/analytics')
      ) || [];

      // Get recent activity with session info - only meaningful events
      const { data: recentEvents, error: eventsError } = await supabase
        .from('analytics_events')
        .select(`
          *,
          visitor_sessions!inner(browser, device, session_id)
        `)
        .gte('timestamp', startDate.toISOString())
        .lte('timestamp', endDate.toISOString())
        .in('session_id', sessionIds)
        .in('event_type', ['link_click', 'page_exit', 'page_hidden'])
        .order('timestamp', { ascending: false })
        .limit(20);

      if (eventsError) throw eventsError;

      // Get page entry events (first page view per session)
      const { data: pageEntries, error: entriesError } = await supabase
        .from('page_views')
        .select(`
          *,
          visitor_sessions!inner(browser, device, session_id)
        `)
        .gte('timestamp', startDate.toISOString())
        .lte('timestamp', endDate.toISOString())
        .in('session_id', sessionIds)
        .not('page_url', 'ilike', '%analytics%')
        .order('timestamp', { ascending: false })
        .limit(10);

      if (entriesError) throw entriesError;

      // Get currently active users (last activity within 5 minutes)
      const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString();
      const { data: activeSessions, error: activeError } = await supabase
        .from('visitor_sessions')
        .select('*')
        .gte('last_activity', fiveMinutesAgo)
        .in('session_id', sessionIds)
        .order('last_activity', { ascending: false });

      if (activeError) throw activeError;

      // Fetch contact leads
      const { data: leads, error: leadsError } = await supabase
        .from('contact_leads')
        .select('*')
        .gte('created_at', startDate.toISOString())
        .lte('created_at', endDate.toISOString())
        .order('created_at', { ascending: false });

      if (leadsError) throw leadsError;

      // Process data
      const totalVisitors = sessions?.length || 0;
      const totalPageViews = pageViews?.length || 0;
      const averageSessionDuration = sessions?.reduce((acc, session) => acc + (session.duration_seconds || 0), 0) / Math.max(totalVisitors, 1);

      // Top pages
      const pageViewCounts = pageViews?.reduce((acc: Record<string, number>, view) => {
        acc[view.page_url] = (acc[view.page_url] || 0) + 1;
        return acc;
      }, {}) || {};
      
      const topPages = Object.entries(pageViewCounts)
        .map(([page, views]) => ({ page, views }))
        .sort((a, b) => b.views - a.views)
        .slice(0, 10);

      // Top pages by time spent
      const pageTimeStats = pageViews?.reduce((acc: Record<string, { totalTime: number; views: number }>, view) => {
        const page = view.page_url;
        if (!acc[page]) {
          acc[page] = { totalTime: 0, views: 0 };
        }
        const timeOnPage = view.time_on_page || 0;
        if (timeOnPage > 0) { // Only count meaningful time
          acc[page].totalTime += timeOnPage;
          acc[page].views += 1;
        }
        return acc;
      }, {}) || {};

      const topPagesByTime = Object.entries(pageTimeStats)
        .filter(([_, stats]) => stats.totalTime > 0) // Only include pages with recorded time
        .map(([page, stats]) => ({
          page,
          totalTime: stats.totalTime,
          averageTime: Math.round(stats.totalTime / stats.views),
          views: stats.views
        }))
        .sort((a, b) => b.totalTime - a.totalTime)
        .slice(0, 10);

      // Browser stats
      const browserCounts = sessions?.reduce((acc: Record<string, number>, session) => {
        const browser = session.browser || 'Unknown';
        acc[browser] = (acc[browser] || 0) + 1;
        return acc;
      }, {}) || {};
      
      const browserStats = Object.entries(browserCounts)
        .map(([browser, count]) => ({ browser, count }))
        .sort((a, b) => b.count - a.count);

      // Device stats
      const deviceCounts = sessions?.reduce((acc: Record<string, number>, session) => {
        const device = session.device || 'Unknown';
        acc[device] = (acc[device] || 0) + 1;
        return acc;
      }, {}) || {};
      
      const deviceStats = Object.entries(deviceCounts)
        .map(([device, count]) => ({ device, count }))
        .sort((a, b) => b.count - a.count);

      // Daily stats
      const dailyStatsMap = new Map<string, { visitors: number; pageViews: number }>();
      
      sessions?.forEach(session => {
        const date = session.first_visit.split('T')[0];
        if (!dailyStatsMap.has(date)) {
          dailyStatsMap.set(date, { visitors: 0, pageViews: 0 });
        }
        dailyStatsMap.get(date)!.visitors += 1;
      });

      pageViews?.forEach(view => {
        const date = view.timestamp.split('T')[0];
        if (!dailyStatsMap.has(date)) {
          dailyStatsMap.set(date, { visitors: 0, pageViews: 0 });
        }
        dailyStatsMap.get(date)!.pageViews += 1;
      });

      // All pages including unvisited ones
      const allKnownPages = [
        '/', '/about', '/contact', '/resume', '/analytics',
        '/product-designs', '/product-designs/quick-services', '/product-designs/camping-app',
        '/product-designs/gourmet-recipes', '/product-designs/adhere-plus', '/mobile-apps',
        '/product-designs/mobile-apps', '/product-designs/grammy-museum', '/graphic-designs',
        '/graphic-designs/data-driven-ebooks', '/graphic-designs/email-marketing',
        '/graphic-designs/product-illustrations', '/graphic-designs/social-media',
        '/graphic-designs/case-studies', '/graphic-designs/event-designs'
      ];
      
      const allPages = allKnownPages.map(page => {
        const pageStats = pageViewCounts[page];
        const timeStats = pageTimeStats[page] || { totalTime: 0, views: 0 };
        return {
          page,
          views: pageStats || 0,
          totalTime: timeStats.totalTime,
          averageTime: timeStats.views > 0 ? Math.round(timeStats.totalTime / timeStats.views) : 0
        };
      }).sort((a, b) => b.views - a.views);

      const dailyStats = Array.from(dailyStatsMap.entries())
        .map(([date, stats]) => ({ date, ...stats }))
        .sort((a, b) => a.date.localeCompare(b.date));

      // Get all visitors (not just recent 20)
      const allVisitors = sessions?.sort((a, b) => 
        new Date(b.first_visit).getTime() - new Date(a.first_visit).getTime()
      ) || [];

      setData({
        totalVisitors,
        totalPageViews,
        activeUsers: activeSessions?.length || 0,
        averageSessionDuration,
        contactLeads: leads?.length || 0,
        topPages,
        topPagesByTime,
        allPages,
        browserStats,
        deviceStats,
        dailyStats,
        allVisitors,
        activeUsersSessions: activeSessions || [],
        recentActivity: [
          ...pageEntries?.map(entry => ({
            id: entry.id,
            type: 'page_entry' as const,
            timestamp: entry.timestamp,
            data: {
              page_url: entry.page_url,
              page_title: entry.page_title,
              browser: entry.visitor_sessions?.browser,
              device: entry.visitor_sessions?.device
            }
          })) || [],
           ...recentEvents?.map(event => ({
             id: event.id,
             type: event.event_type as 'link_click' | 'page_exit' | 'page_hidden',
             timestamp: event.timestamp,
             data: {
               ...(typeof event.event_data === 'object' && event.event_data !== null ? event.event_data : {}),
               page_url: event.page_url,
               browser: event.visitor_sessions?.browser,
               device: event.visitor_sessions?.device
             }
           })) || []
        ].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()).slice(0, 30),
        contactLeadsList: leads || []
      });
    } catch (error) {
      console.error('Failed to fetch analytics data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchAnalyticsData();
    }
  }, [timeRange, isAuthenticated, customDateRange]);

  // Set up real-time updates
  useEffect(() => {
    if (!isAuthenticated || !liveUpdates) return;

    const channel = supabase
      .channel('analytics-updates')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'page_views'
        },
        () => {
          fetchAnalyticsData();
        }
      )
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public', 
          table: 'visitor_sessions'
        },
        () => {
          fetchAnalyticsData();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [isAuthenticated, liveUpdates]);

  const getDeviceIcon = (device: string) => {
    switch (device.toLowerCase()) {
      case 'mobile': return <Smartphone className="h-4 w-4" />;
      case 'tablet': return <Tablet className="h-4 w-4" />;
      default: return <Monitor className="h-4 w-4" />;
    }
  };

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (!isAuthenticated) {
    return <PasswordProtection onAuthenticated={() => setIsAuthenticated(true)} />;
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center h-64">
          <RefreshCw className="h-8 w-8 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
            <p className="text-muted-foreground">Monitor your website's performance and visitor activity</p>
          </div>
          <div className="flex items-center gap-4">
            <Select value={timeRange} onValueChange={(value: '7d' | '30d' | '90d' | 'custom') => setTimeRange(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select time range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
                <SelectItem value="custom">Custom range</SelectItem>
              </SelectContent>
            </Select>

            {timeRange === 'custom' && (
              <div className="flex items-center gap-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {customDateRange.startDate ? format(customDateRange.startDate, 'MMM dd, yyyy') : 'Start date'}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={customDateRange.startDate || undefined}
                      onSelect={(date) => setCustomDateRange(prev => ({ ...prev, startDate: date || null }))}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                
                <span className="text-muted-foreground">to</span>
                
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {customDateRange.endDate ? format(customDateRange.endDate, 'MMM dd, yyyy') : 'End date'}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={customDateRange.endDate || undefined}
                      onSelect={(date) => setCustomDateRange(prev => ({ ...prev, endDate: date || null }))}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            )}

            <div className="flex items-center space-x-2">
              <Switch 
                id="live-updates" 
                checked={liveUpdates} 
                onCheckedChange={setLiveUpdates}
              />
              <label htmlFor="live-updates" className="text-sm">Live</label>
            </div>
            
            <Button onClick={fetchAnalyticsData} variant="outline" size="sm">
              <RefreshCw size={16} className="mr-2" />
              Refresh
            </Button>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Total Visitors</h3>
            </div>
            <p className="text-3xl font-bold">{data?.totalVisitors || 0}</p>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <Eye className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Page Views</h3>
            </div>
            <p className="text-3xl font-bold">{data?.totalPageViews || 0}</p>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="h-5 w-5 text-green-500" />
              <h3 className="font-semibold">Active Now</h3>
            </div>
            <p className="text-3xl font-bold text-green-500">{data?.activeUsers || 0}</p>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Avg. Session</h3>
            </div>
            <p className="text-3xl font-bold">{formatDuration(Math.round(data?.averageSessionDuration || 0))}</p>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <Mail className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Contact Leads</h3>
            </div>
            <p className="text-3xl font-bold">{data?.contactLeads || 0}</p>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="live">Live Activity</TabsTrigger>
            <TabsTrigger value="visitors">Visitors</TabsTrigger>
            <TabsTrigger value="pages">Pages</TabsTrigger>
            <TabsTrigger value="leads">Leads</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Device Stats */}
              <Card className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Monitor className="h-5 w-5" />
                  Device Types
                </h3>
                <div className="space-y-3">
                  {data?.deviceStats.map(({ device, count }) => (
                    <div key={device} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getDeviceIcon(device)}
                        <span className="font-medium">{device}</span>
                      </div>
                      <Badge variant="secondary">{count}</Badge>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Browser Stats */}
              <Card className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Monitor className="h-5 w-5" />
                  Browsers
                </h3>
                <div className="space-y-3">
                  {data?.browserStats.map(({ browser, count }) => (
                    <div key={browser} className="flex items-center justify-between">
                      <span className="font-medium">{browser}</span>
                      <Badge variant="secondary">{count}</Badge>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="live" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Currently Active Users */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Activity className="h-5 w-5 text-green-500" />
                    Active Users
                  </h3>
                  <Badge variant={liveUpdates ? "default" : "secondary"}>
                    {liveUpdates ? "Live" : "Static"}
                  </Badge>
                </div>
                <div className="space-y-3">
                  {data?.activeUsersSessions?.length === 0 ? (
                    <p className="text-muted-foreground text-center py-4">No active users</p>
                  ) : (
                    data?.activeUsersSessions?.map((user) => (
                      <div key={user.session_id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          {getDeviceIcon(user.device)}
                          <div>
                            <p className="font-medium">{user.browser} on {user.device}</p>
                            <p className="text-sm text-muted-foreground">
                              {user.current_page === '/' ? 'Home' : user.current_page}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-sm text-muted-foreground">
                            {formatDate(user.last_activity)}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </Card>

              {/* Recent Activity */}
              <Card className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Recent Activity
                </h3>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {data?.recentActivity.length > 0 ? (
                    data?.recentActivity?.map((activity) => (
                      <div key={activity.id} className="flex items-center justify-between p-2 border-l-2 border-primary/20 pl-3">
                        <div className="flex items-center gap-2">
                          <div className="flex-shrink-0">
                            {activity.type === 'page_entry' && (
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            )}
                            {activity.type === 'link_click' && (
                              <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            )}
                            {(activity.type === 'page_exit' || activity.type === 'page_hidden') && (
                              <div className="w-2 h-2 bg-orange-500 rounded-full" />
                            )}
                          </div>
                          <div className="min-w-0">
                            <p className="font-medium text-sm truncate">
                              {activity.type === 'page_entry' && 'Page Visit'}
                              {activity.type === 'link_click' && 'Link Click'}
                              {activity.type === 'page_exit' && 'Page Exit'}
                              {activity.type === 'page_hidden' && 'Tab Hidden'}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {activity.data.browser} • {activity.data.page_url === '/' ? 'Home' : activity.data.page_url}
                            </p>
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                          {formatDate(activity.timestamp)}
                        </span>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-muted-foreground py-8">No recent activity</p>
                  )}
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="visitors" className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Daily Visitors</h3>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {selectedDate ? format(selectedDate, "MMM dd, yyyy") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="end">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              {/* Daily Visitors Chart */}
              <div className="mb-6">
                <div className="h-64 flex items-end justify-center space-x-2">
                  {data?.dailyStats.slice(-7).map((day, index) => (
                    <div key={day.date} className="flex flex-col items-center">
                      <div 
                        className="bg-primary/80 hover:bg-primary transition-colors rounded-t"
                        style={{
                          height: `${Math.max((day.visitors / Math.max(...data.dailyStats.map(d => d.visitors))) * 200, 4)}px`,
                          width: '32px'
                        }}
                      ></div>
                      <div className="text-xs text-muted-foreground mt-1 rotate-45 origin-bottom-left">
                        {format(new Date(day.date), "MMM dd")}
                      </div>
                      <div className="text-xs font-medium">{day.visitors}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <h4 className="font-medium mb-3">All Visitors</h4>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {data?.allVisitors
                  .filter(visitor => {
                    if (!selectedDate) return true;
                    const visitorDate = new Date(visitor.first_visit).toDateString();
                    return visitorDate === selectedDate.toDateString();
                  })
                  .map((visitor) => (
                    <div key={visitor.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        {getDeviceIcon(visitor.device)}
                        <div>
                          <p className="font-medium">{visitor.browser} on {visitor.device}</p>
                          <p className="text-sm text-muted-foreground">
                            {visitor.page_views} page{visitor.page_views !== 1 ? 's' : ''} • {formatDuration(visitor.duration_seconds)} • from {visitor.referrer || 'Direct'}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{formatDuration(visitor.duration_seconds)}</p>
                        <p className="text-sm text-muted-foreground">{formatDate(visitor.first_visit)}</p>
                      </div>
                    </div>
                  ))}
                {data?.allVisitors.filter(visitor => {
                  if (!selectedDate) return true;
                  const visitorDate = new Date(visitor.first_visit).toDateString();
                  return visitorDate === selectedDate.toDateString();
                }).length === 0 && (
                  <p className="text-center text-muted-foreground py-8">
                    No visitors found for {selectedDate ? format(selectedDate, "MMM dd, yyyy") : "selected date"}
                  </p>
                )}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="pages" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Top Pages by Views</h3>
                <div className="space-y-3">
                  {data?.topPages.map(({ page, views }) => (
                    <div key={page} className="flex items-center justify-between p-3 border rounded-lg">
                      <span className="font-medium">{page === '/' ? 'Home' : page}</span>
                      <Badge variant="secondary">{views} views</Badge>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-4">Top Pages by Time Spent</h3>
                <div className="space-y-2">
                  {data?.topPagesByTime.length > 0 ? (
                    data.topPagesByTime.map((page) => (
                      <div key={page.page} className="flex items-center justify-between p-2 rounded-lg bg-secondary/30">
                        <span className="font-medium truncate">
                          {page.page === '/' ? 'Home' : page.page}
                        </span>
                        <div className="text-right">
                          <div className="font-medium">{Math.floor(page.totalTime / 60)}m {page.totalTime % 60}s total</div>
                          <div className="text-sm text-muted-foreground">
                            {Math.floor(page.averageTime / 60)}m {page.averageTime % 60}s avg • {page.views} views
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-muted-foreground py-4">No time data available</p>
                  )}
                </div>
              </Card>
            </div>
            
            {/* All Pages including unvisited */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">All Pages</h3>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {data?.allPages.map((page) => (
                  <div key={page.page} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <span className="font-medium">
                        {page.page === '/' ? 'Home' : page.page}
                      </span>
                      {page.views === 0 && (
                        <Badge variant="outline" className="ml-2 text-xs">Unvisited</Badge>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{page.views} views</div>
                      <div className="text-sm text-muted-foreground">
                        {page.totalTime > 0 ? 
                          `${Math.floor(page.averageTime / 60)}m ${page.averageTime % 60}s avg` : 
                          'No time data'
                        }
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="leads" className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Contact Leads</h3>
              <div className="space-y-3">
                {data?.contactLeadsList.map((lead) => (
                  <div key={lead.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{lead.name}</p>
                      <p className="text-sm text-muted-foreground">{lead.email}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline">{lead.source}</Badge>
                      <p className="text-sm text-muted-foreground mt-1">
                        {formatDate(lead.created_at)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Analytics;