-- Enable real-time functionality for analytics tables
ALTER TABLE public.visitor_sessions REPLICA IDENTITY FULL;
ALTER TABLE public.page_views REPLICA IDENTITY FULL;
ALTER TABLE public.analytics_events REPLICA IDENTITY FULL;
ALTER TABLE public.contact_leads REPLICA IDENTITY FULL;

-- Add tables to realtime publication
ALTER PUBLICATION supabase_realtime ADD TABLE public.visitor_sessions;
ALTER PUBLICATION supabase_realtime ADD TABLE public.page_views;
ALTER PUBLICATION supabase_realtime ADD TABLE public.analytics_events;
ALTER PUBLICATION supabase_realtime ADD TABLE public.contact_leads;