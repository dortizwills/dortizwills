-- Drop unused analytics tables
DROP TABLE IF EXISTS public.analytics_events CASCADE;
DROP TABLE IF EXISTS public.page_views CASCADE;
DROP TABLE IF EXISTS public.visitor_sessions CASCADE;

-- Drop unused authentication infrastructure tables
DROP TABLE IF EXISTS public.user_roles CASCADE;
DROP TABLE IF EXISTS public.profiles CASCADE;

-- Drop the role-related functions that are no longer needed
DROP FUNCTION IF EXISTS public.has_role(uuid, app_role) CASCADE;
DROP FUNCTION IF EXISTS public.get_current_user_role() CASCADE;

-- Drop the app_role enum type
DROP TYPE IF EXISTS public.app_role CASCADE;