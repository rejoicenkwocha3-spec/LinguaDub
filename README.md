# LinguaDub

Next.js 15, TypeScript, Tailwind, Supabase. Current scope: marketing shell, full email/password auth, protected dashboard.

## Setup
1. `cp .env.example .env.local` and fill in the project URL and **anon** key (Supabase > Project Settings > API).
2. Run `supabase/migrations/0001_profiles_projects.sql` in the SQL Editor (idempotent, safe on an existing project).
3. Supabase > Authentication > URL Configuration: set Site URL to your deployed URL and add `<site>/auth/callback` (and `http://localhost:3000/auth/callback`) to Redirect URLs.
4. `npm install && npm run dev`

## Auth flows
Sign up (email verification), sign in, resend verification, forgot/reset password, log out, persistent cookie sessions, middleware protected `/dashboard`, profile editing in Settings.
If "Confirm email" is disabled in your project, sign up goes straight to the dashboard.

## Deploy
Set the three env vars from `.env.example` on your host (e.g. Vercel). Never expose the service role key to the browser.
