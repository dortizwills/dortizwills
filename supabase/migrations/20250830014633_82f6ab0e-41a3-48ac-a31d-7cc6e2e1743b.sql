-- Clean up incorrect analytics page views that were created in the loop
DELETE FROM public.page_views 
WHERE page_url = '/analytics';

-- Clean up visitor sessions that only visited analytics page  
DELETE FROM public.visitor_sessions 
WHERE session_id NOT IN (
  SELECT DISTINCT session_id 
  FROM public.page_views 
  WHERE page_url != '/analytics'
) AND page_views > 500;