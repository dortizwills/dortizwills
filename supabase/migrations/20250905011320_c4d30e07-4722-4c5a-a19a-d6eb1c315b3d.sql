-- Remove the dangerous public read policy that exposes customer data
DROP POLICY IF EXISTS "Public read access for contact submissions" ON public.contact_submissions;

-- Create a secure policy that only allows authenticated admin users to read submissions
-- This will require implementing authentication and admin roles in the future
CREATE POLICY "Only authenticated admins can read contact submissions" 
ON public.contact_submissions 
FOR SELECT 
TO authenticated
USING (
  -- For now, this will block all access until proper admin authentication is implemented
  -- This is intentionally restrictive to prevent data exposure
  false
);