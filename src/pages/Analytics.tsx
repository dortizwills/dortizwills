import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  Eye, 
  Clock, 
  Globe, 
  Smartphone, 
  Monitor, 
  Tablet,
  TrendingUp,
  Mail,
  MousePointer,
  Calendar,
  BarChart3,
  RefreshCw
} from 'lucide-react';
import PasswordProtection from '@/components/PasswordProtection';

interface AnalyticsData {
  totalVisitors: number;
  totalPageViews: number;
  averageSessionDuration: number;
  topPages: Array<{ page: string; views: number }>;
  browserStats: Array<{ browser: string; count: number }>;
  deviceStats: Array<{ device: string; count: number }>;
  recentVisitors: Array<{
    id: string;
    browser: string;
    device: string;
    country: string;
    first_visit: string;
    page_views: number;
    duration_seconds: number;
  }>;
  contactLeads: Array<{
    id: string;
    name: string;
    email: string;
    source: string;
    created_at: string;
  }>;
  dailyStats: Array<{ date: string; visitors: number; pageViews: number }>;
}

const Analytics: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('30d');

  const fetchAnalyticsData = async () => {
    setLoading(true);
    try {
      const days = timeRange === '7d' ? 7 : timeRange === '30d' ? 30 : 90;
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - days);

      // Fetch visitor sessions
      const { data: sessions, error: sessionsError } = await supabase
        .from('visitor_sessions')
        .select('*')
        .gte('first_visit', startDate.toISOString())
        .order('first_visit', { ascending: false });

      if (sessionsError) throw sessionsError;

      // Fetch page views
      const { data: pageViews, error: pageViewsError } = await supabase
        .from('page_views')
        .select('*')
        .gte('timestamp', startDate.toISOString());

      if (pageViewsError) throw pageViewsError;

      // Fetch contact leads
      const { data: leads, error: leadsError } = await supabase
        .from('contact_leads')
        .select('*')
        .gte('created_at', startDate.toISOString())
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

      const dailyStats = Array.from(dailyStatsMap.entries())
        .map(([date, stats]) => ({ date, ...stats }))
        .sort((a, b) => a.date.localeCompare(b.date));

      setData({
        totalVisitors,
        totalPageViews,
        averageSessionDuration,
        topPages,
        browserStats,
        deviceStats,
        recentVisitors: sessions?.slice(0, 20) || [],
        contactLeads: leads || [],
        dailyStats
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
  }, [timeRange, isAuthenticated]);

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
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-display font-bold mb-2">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Track your portfolio's performance and visitor insights</p>
        </div>
        <div className="flex gap-2">
          <select 
            value={timeRange} 
            onChange={(e) => setTimeRange(e.target.value as '7d' | '30d' | '90d')}
            className="px-3 py-2 border rounded-md"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </select>
          <Button onClick={fetchAnalyticsData} variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
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
          <p className="text-3xl font-bold">{data?.contactLeads?.length || 0}</p>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
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
                <Globe className="h-5 w-5" />
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

        <TabsContent value="visitors" className="space-y-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Recent Visitors</h3>
            <div className="space-y-3">
              {data?.recentVisitors.map((visitor) => (
                <div key={visitor.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    {getDeviceIcon(visitor.device)}
                    <div>
                      <p className="font-medium">{visitor.browser} on {visitor.device}</p>
                      <p className="text-sm text-muted-foreground">
                        {formatDate(visitor.first_visit)} • {visitor.page_views} pages
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{formatDuration(visitor.duration_seconds)}</p>
                    {visitor.country && (
                      <p className="text-sm text-muted-foreground">{visitor.country}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="pages" className="space-y-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Top Pages</h3>
            <div className="space-y-3">
              {data?.topPages.map(({ page, views }) => (
                <div key={page} className="flex items-center justify-between p-3 border rounded-lg">
                  <span className="font-medium">{page === '/' ? 'Home' : page}</span>
                  <Badge variant="secondary">{views} views</Badge>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="leads" className="space-y-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Contact Leads</h3>
            <div className="space-y-3">
              {data?.contactLeads.map((lead) => (
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
  );
};

export default Analytics;
