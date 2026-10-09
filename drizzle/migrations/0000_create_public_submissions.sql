CREATE TABLE public.training_applications (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 full_name text NOT NULL CHECK (char_length(full_name) BETWEEN 2 AND 100),
 email text NOT NULL CHECK (char_length(email) <= 254 AND email LIKE '%@%'),
 phone text NOT NULL DEFAULT '' CHECK (char_length(phone) <= 30),
 course text NOT NULL CHECK (char_length(course) BETWEEN 1 AND 100),
 education text NOT NULL DEFAULT '' CHECK (char_length(education) <= 200),
 motivation text NOT NULL DEFAULT '' CHECK (char_length(motivation) <= 2000),
 consent boolean NOT NULL CHECK (consent = true),
 created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.training_applications TO anon, authenticated;
GRANT ALL ON public.training_applications TO service_role;
ALTER TABLE public.training_applications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Submit application without public read access" ON public.training_applications FOR INSERT TO anon, authenticated WITH CHECK (consent = true);
CREATE TABLE public.newsletter_subscribers (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 email text UNIQUE NOT NULL CHECK (char_length(email) <= 254 AND email LIKE '%@%'),
 consent boolean NOT NULL CHECK (consent = true),
 created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.newsletter_subscribers TO anon, authenticated;
GRANT ALL ON public.newsletter_subscribers TO service_role;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Subscribe without public read access" ON public.newsletter_subscribers FOR INSERT TO anon, authenticated WITH CHECK (consent = true);