-- Fix critical security issue: Restrict analytics data access to authenticated users only

-- Drop existing overly permissive policies for visitor_sessions
DROP POLICY IF EXISTS "Public can view visitor sessions" ON public.visitor_sessions;
DROP POLICY IF EXISTS "Public can update visitor sessions" ON public.visitor_sessions;

-- Drop existing overly permissive policies for page_views  
DROP POLICY IF EXISTS "Public can view page views" ON public.page_views;

-- Drop existing overly permissive policies for analytics_events
DROP POLICY IF EXISTS "Public can view analytics events" ON public.analytics_events;

-- Drop existing overly permissive policies for contact_leads
DROP POLICY IF EXISTS "Public can view contact leads" ON public.contact_leads;
DROP POLICY IF EXISTS "Public can update contact leads" ON public.contact_leads;

-- Create secure policies that only allow authenticated users to read analytics data
CREATE POLICY "Only authenticated users can view visitor sessions" 
ON public.visitor_sessions 
FOR SELECT 
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Only authenticated users can update visitor sessions" 
ON public.visitor_sessions 
FOR UPDATE 
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Only authenticated users can view page views" 
ON public.page_views 
FOR SELECT 
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Only authenticated users can view analytics events" 
ON public.analytics_events 
FOR SELECT 
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Only authenticated users can view contact leads" 
ON public.contact_leads 
FOR SELECT 
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Only authenticated users can update contact leads" 
ON public.contact_leads 
FOR UPDATE 
USING (auth.uid() IS NOT NULL);

-- Keep public insert policies for tracking (anonymous users need to insert data)
-- but add rate limiting considerations for the future

-- Create a profiles table for additional admin user management
CREATE TABLE public.profiles (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL UNIQUE,
  role text NOT NULL DEFAULT 'user',
  display_name text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS on profiles table
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create policies for profiles table
CREATE POLICY "Users can view their own profile" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile" 
ON public.profiles 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile" 
ON public.profiles 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Add trigger to automatically update the updated_at column
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_last_activity_column();