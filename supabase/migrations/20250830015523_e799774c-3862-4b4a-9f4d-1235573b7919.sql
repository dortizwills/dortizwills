-- Clean up duplicate and invalid page views that may be causing inflated counts
-- Remove page views with suspiciously high counts from single sessions
DELETE FROM public.page_views 
WHERE session_id IN (
  SELECT session_id 
  FROM public.page_views 
  GROUP BY session_id 
  HAVING COUNT(*) > 100
);

-- Update visitor sessions to recalculate page view counts accurately
UPDATE public.visitor_sessions 
SET page_views = (
  SELECT COUNT(*) 
  FROM public.page_views 
  WHERE page_views.session_id = visitor_sessions.session_id
);

-- Remove visitor sessions with zero page views (orphaned sessions)
DELETE FROM public.visitor_sessions 
WHERE page_views = 0 OR page_views IS NULL;