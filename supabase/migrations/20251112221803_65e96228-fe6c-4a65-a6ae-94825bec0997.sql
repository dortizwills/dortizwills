-- Update contact_submissions policies since get_current_user_role() was dropped
-- Drop the old admin-only SELECT policy
DROP POLICY IF EXISTS "Admin users can read contact submissions" ON public.contact_submissions;

-- Create new policy: Only authenticated users can read submissions
-- Since there's no auth system, this effectively prevents reads until auth is implemented
CREATE POLICY "Authenticated users can read contact submissions"
ON public.contact_submissions
FOR SELECT
USING (auth.uid() IS NOT NULL);