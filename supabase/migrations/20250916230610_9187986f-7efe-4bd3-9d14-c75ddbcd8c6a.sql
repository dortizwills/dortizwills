-- Fix security vulnerability: Implement proper role-based access control for contact_leads
-- Create dedicated user_roles system and restrict contact_leads to admin users only

-- 1. Create an enum for roles
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

-- 2. Create the user_roles table (proper way to handle roles)
CREATE TABLE public.user_roles (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    UNIQUE (user_id, role)
);

-- 3. Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- 4. Create RLS policies for user_roles (users can only see their own roles)
CREATE POLICY "Users can view their own roles" 
ON public.user_roles 
FOR SELECT 
USING (auth.uid() = user_id);

-- 5. Create a proper security definer function to check roles (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- 6. Update the existing get_current_user_role function to use the new system
CREATE OR REPLACE FUNCTION public.get_current_user_role()
RETURNS TEXT AS $$
  SELECT role::text FROM public.user_roles WHERE user_id = auth.uid() LIMIT 1;
$$ LANGUAGE SQL SECURITY DEFINER STABLE SET search_path = public;

-- 7. Drop existing contact_leads policies that allow any authenticated user
DROP POLICY IF EXISTS "Only authenticated users can view contact leads" ON public.contact_leads;
DROP POLICY IF EXISTS "Only authenticated users can update contact leads" ON public.contact_leads;
DROP POLICY IF EXISTS "Only authenticated users can insert contact leads" ON public.contact_leads;

-- 8. Create new admin-only policies for contact_leads
CREATE POLICY "Only admin users can view contact leads" 
ON public.contact_leads 
FOR SELECT 
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admin users can update contact leads" 
ON public.contact_leads 
FOR UPDATE 
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admin users can insert contact leads" 
ON public.contact_leads 
FOR INSERT 
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- 9. Add comments explaining the security approach
COMMENT ON TABLE public.user_roles IS 'Stores user roles separately from profiles to avoid RLS recursion and maintain security';
COMMENT ON FUNCTION public.has_role IS 'Security definer function to check user roles without triggering RLS recursion';
COMMENT ON POLICY "Only admin users can view contact leads" ON public.contact_leads 
IS 'Restricts sensitive customer contact data access to admin users only';

-- 10. Migrate existing profile roles to new system (if any exist)
-- Note: This assumes the profiles table has a role column, but won't break if it doesn't
INSERT INTO public.user_roles (user_id, role)
SELECT user_id, role::app_role 
FROM public.profiles 
WHERE role IS NOT NULL 
  AND role IN ('admin', 'moderator', 'user')
ON CONFLICT (user_id, role) DO NOTHING;