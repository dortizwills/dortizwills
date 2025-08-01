
-- Create a table to store contact form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'responded'))
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert (for the contact form)
CREATE POLICY "Anyone can submit contact forms" 
  ON public.contact_submissions 
  FOR INSERT 
  WITH CHECK (true);

-- Create a policy for reading (you might want to restrict this to admins later)
CREATE POLICY "Public read access for contact submissions" 
  ON public.contact_submissions 
  FOR SELECT 
  USING (true);
