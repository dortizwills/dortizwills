-- Fix security vulnerability: Restrict contact_leads INSERT to authenticated users only
-- This prevents competitors from harvesting lead data while maintaining legitimate functionality

-- Drop the existing public INSERT policy
DROP POLICY IF EXISTS "Public can insert contact leads" ON public.contact_leads;

-- Create new policy that only allows authenticated users to insert contact leads
CREATE POLICY "Only authenticated users can insert contact leads" 
ON public.contact_leads 
FOR INSERT 
WITH CHECK (auth.uid() IS NOT NULL);

-- Add comment explaining the security rationale
COMMENT ON POLICY "Only authenticated users can insert contact leads" ON public.contact_leads 
IS 'Prevents unauthorized harvesting of lead data by competitors or malicious actors';