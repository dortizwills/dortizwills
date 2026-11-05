-- Create analytics and visitor tracking tables

-- Sessions table to track individual visitor sessions
CREATE TABLE public.visitor_sessions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL UNIQUE,
  visitor_ip TEXT,
  user_agent TEXT,
  browser TEXT,
  device TEXT,
  os TEXT,
  country TEXT,
  city TEXT,
  referrer TEXT,
  landing_page TEXT,
  first_visit TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  last_activity TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  page_views INTEGER DEFAULT 1,
  duration_seconds INTEGER DEFAULT 0,
  is_returning_visitor BOOLEAN DEFAULT false
);

-- Page views table to track individual page visits
CREATE TABLE public.page_views (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL,
  page_url TEXT NOT NULL,
  page_title TEXT,
  timestamp TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  time_on_page INTEGER DEFAULT 0,
  scroll_depth INTEGER DEFAULT 0,
  FOREIGN KEY (session_id) REFERENCES public.visitor_sessions(session_id) ON DELETE CASCADE
);

-- Events table to track user interactions
CREATE TABLE public.analytics_events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL,
  event_type TEXT NOT NULL, -- 'click', 'scroll', 'download', 'contact_form', etc.
  event_data JSONB,
  page_url TEXT,
  timestamp TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  FOREIGN KEY (session_id) REFERENCES public.visitor_sessions(session_id) ON DELETE CASCADE
);

-- Contact leads table to track potential leads
CREATE TABLE public.contact_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT,
  email TEXT,
  name TEXT,
  company TEXT,
  phone TEXT,
  source TEXT, -- 'contact_form', 'tracked_visitor', etc.
  lead_score INTEGER DEFAULT 0,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  FOREIGN KEY (session_id) REFERENCES public.visitor_sessions(session_id) ON DELETE SET NULL
);

-- Enable Row Level Security
ALTER TABLE public.visitor_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.page_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_leads ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (since these are analytics tables)
CREATE POLICY "Public can insert visitor sessions" ON public.visitor_sessions FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can update visitor sessions" ON public.visitor_sessions FOR UPDATE USING (true);
CREATE POLICY "Public can view visitor sessions" ON public.visitor_sessions FOR SELECT USING (true);

CREATE POLICY "Public can insert page views" ON public.page_views FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can view page views" ON public.page_views FOR SELECT USING (true);

CREATE POLICY "Public can insert analytics events" ON public.analytics_events FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can view analytics events" ON public.analytics_events FOR SELECT USING (true);

CREATE POLICY "Public can insert contact leads" ON public.contact_leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can view contact leads" ON public.contact_leads FOR SELECT USING (true);
CREATE POLICY "Public can update contact leads" ON public.contact_leads FOR UPDATE USING (true);

-- Create indexes for better performance
CREATE INDEX idx_visitor_sessions_session_id ON public.visitor_sessions(session_id);
CREATE INDEX idx_visitor_sessions_first_visit ON public.visitor_sessions(first_visit);
CREATE INDEX idx_page_views_session_id ON public.page_views(session_id);
CREATE INDEX idx_page_views_timestamp ON public.page_views(timestamp);
CREATE INDEX idx_analytics_events_session_id ON public.analytics_events(session_id);
CREATE INDEX idx_analytics_events_timestamp ON public.analytics_events(timestamp);
CREATE INDEX idx_contact_leads_created_at ON public.contact_leads(created_at);

-- Create function to update last activity
CREATE OR REPLACE FUNCTION public.update_last_activity_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for contact leads
CREATE TRIGGER update_contact_leads_updated_at
  BEFORE UPDATE ON public.contact_leads
  FOR EACH ROW
  EXECUTE FUNCTION public.update_last_activity_column();