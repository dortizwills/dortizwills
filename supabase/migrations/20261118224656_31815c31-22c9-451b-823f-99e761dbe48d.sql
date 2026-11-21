DROP POLICY IF EXISTS "Anyone can submit contact forms" ON public.contact_submissions;
CREATE POLICY "Anyone can submit valid contact forms" ON public.contact_submissions
FOR INSERT TO anon, authenticated
WITH CHECK (
  char_length(btrim(name)) BETWEEN 1 AND 100
  AND char_length(email) BETWEEN 3 AND 255
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND (subject IS NULL OR char_length(subject) <= 200)
  AND char_length(btrim(message)) BETWEEN 1 AND 5000
  AND (status IS NULL OR status = 'new')
);