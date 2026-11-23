nod# Akilan – Portfolio
React + Vite + Tailwind CSS + Framer Motion + Lucide.
```
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
```
Edit your content in `src/data.js`. Resume: `public/Akilan_Resume.pdf`. Photo: `public/akilan.jpg`.
The contact form sends submissions through EmailJS without FormSubmit's first-submission confirmation. To configure it:

1. Create an EmailJS email service and template addressed to the email in `src/data.js`.
2. Set the template variables to `name`, `email`, `reply_to`, `subject`, and `message`.
3. Copy `.env.example` to `.env.local` and fill in the EmailJS service ID, template ID, and public key.
4. Add the same variables to your deployment's environment settings, then rebuild and redeploy.

The EmailJS public key is intended for browser use. Restrict allowed origins in your EmailJS account.
