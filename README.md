# AQ Wellness & Aesthetics Centre Website

Static multi-page website package prepared for GitHub + Cloudflare Pages.

## Files
- `index.html` — Home
- `about.html` — About AQ Wellness
- `services/` — 18 individual therapy and massage pages
- `cosmetology.html` — Makeup services and Basic / Advance Beauty Courses
- `academy.html` — V-Fit Wellness Academy training partner courses
- `appointment.html` — Appointment request form
- `course-enquiry.html` — Course enquiry form
- `admin.html` — Admin dashboard (requires Supabase setup)
- `contact.html`, `privacy-policy.html`, `refund-policy.html`, `terms.html`
- `config.js` — public website configuration
- `supabase-setup.sql` — starter database schema and row-level security policies

## Important before publishing
1. Replace the temporary text-based AQ and V-fit logo treatments with the exact original logo files supplied by the owner. This package does not recreate the official logos.
2. Add Supabase project URL and anon/public key in `config.js`.
3. Run `supabase-setup.sql` in Supabase SQL Editor and create an admin login in Supabase Authentication.
4. Test appointment submissions and admin access before publishing.
5. Add final real-world clinic images or approved AI-generated treatment images. Current service tiles use designed visual placeholders; do not mistake them for actual treatment photographs.
6. Review all course terms, tax wording, privacy language and refund policy with an appropriate professional before going live.

## Hosting
### GitHub Pages
Create a repository, upload all files preserving folders, then enable Pages from repository Settings.

### Cloudflare Pages
Create a Pages project, connect the GitHub repository, choose framework preset `None`, set build command blank and output directory `/`. Deploy.

## Appointment workflow
- The form opens WhatsApp with the appointment details.
- If Supabase is configured, it also inserts a request into `appointment_requests`.
- Admin dashboard uses Supabase email/password authentication to view requests.
- Appointments are requests only. The clinic must confirm availability manually.
- This starter does not block time slots, send automatic SMS/email, or automatically confirm appointments.

## Privacy
The form asks only for contact and booking details plus optional reason/safety information. Avoid collecting unnecessary sensitive medical information.
