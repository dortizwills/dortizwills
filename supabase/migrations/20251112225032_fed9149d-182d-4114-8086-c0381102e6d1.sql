-- Fix security issues identified in scan

-- 1. Drop unused contact_leads table (RLS enabled but no policies, unused)
DROP TABLE IF EXISTS public.contact_leads;

-- 2. Fix contact_submissions policies
-- Drop the problematic SELECT policy that requires authentication (which doesn't exist)
DROP POLICY IF EXISTS "Authenticated users can read contact submissions" ON public.contact_submissions;

-- Note: INSERT policy "Anyone can submit contact forms" remains (correct for public contact form)
-- Access to view submissions should be done via Supabase dashboard with service role
-- No UPDATE/DELETE policies needed since there's no authentication system

-- 3. Fix function search_path issue
-- Recreate update_last_activity_column with proper search_path
CREATE OR REPLACE FUNCTION public.update_last_activity_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;