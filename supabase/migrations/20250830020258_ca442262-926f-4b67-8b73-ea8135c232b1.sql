-- Reset inflated page view counts by removing suspicious entries
-- First, let's remove page views that are clearly inflated (more than 20 views from same session for same page)
DELETE FROM public.page_views 
WHERE (session_id, page_url) IN (
  SELECT session_id, page_url 
  FROM public.page_views 
  GROUP BY session_id, page_url 
  HAVING COUNT(*) > 20
);

-- Remove page views with zero or very low time spent that might be spam/loops
DELETE FROM public.page_views 
WHERE time_on_page < 2 AND page_url IN ('/', '/about');

-- Recalculate and fix visitor session page view counts
UPDATE public.visitor_sessions 
SET page_views = (
  SELECT COUNT(*) 
  FROM public.page_views 
  WHERE page_views.session_id = visitor_sessions.session_id
)
WHERE session_id IN (
  SELECT DISTINCT session_id 
  FROM public.page_views
);

-- Remove any orphaned visitor sessions with no page views
DELETE FROM public.visitor_sessions 
WHERE page_views = 0 OR page_views IS NULL;