-- Fix security issue: Allow authenticated administrators to read contact submissions
-- This restores basic business functionality while maintaining security

-- Create a security definer function to safely check user role and avoid RLS recursion
CREATE OR REPLACE FUNCTION public.get_current_user_role()
RETURNS TEXT AS $$
  SELECT role FROM public.profiles WHERE user_id = auth.uid();
$$ LANGUAGE SQL SECURITY DEFINER STABLE SET search_path = public;

-- Drop the existing policy that blocks all reads
DROP POLICY IF EXISTS "Only authenticated admins can read contact submissions" ON public.contact_submissions;

-- Create new policy that allows admin users to read contact submissions
CREATE POLICY "Admin users can read contact submissions" 
ON public.contact_submissions 
FOR SELECT 
USING (public.get_current_user_role() = 'admin');

-- Add comment explaining the security approach
COMMENT ON POLICY "Admin users can read contact submissions" ON public.contact_submissions 
IS 'Allows authenticated users with admin role to read contact form submissions for business operations';