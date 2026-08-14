# Tushar Ojha — Portfolio

Built with React + Vite + Tailwind CSS v4 + Framer Motion.

## Run it locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Add / edit projects (no other file needs to change)

Open `src/data/projects.js` and edit the `projects` array. Each object is one
project card. Copy an existing entry, change the fields, save — it appears on
the site automatically.

Smaller projects go in the `sideProjects` array in the same file (rendered as
a compact list under the main cards).

## Edit your info

- `src/data/profile.js` — name, email, GitHub, LinkedIn, skills, certifications,
  education, leadership lines.
- Add your LinkedIn URL to the `linkedin` field once you have one — it's
  currently blank and hidden until filled in.

## Set up the contact form (2 minutes, free)

1. Go to formspree.io and sign up.
2. Create a new form — it gives you an endpoint like `https://formspree.io/f/xxxxabcd`.
3. Open `src/components/Contact.jsx` and replace the `FORMSPREE_ENDPOINT`
   constant near the top with your real endpoint.
4. Submissions land in your Formspree inbox / forwarded email.

## Swap in your resume

Replace `public/resume/Tushar_Ojha_Resume.pdf` with your latest resume,
keeping the same filename (or update `resumeUrl` in `src/data/profile.js`
if you rename it).

## Deploy (free, ~2 minutes)

**Vercel (recommended):**
1. Push this folder to a GitHub repo.
2. Go to vercel.com -> New Project -> import the repo.
3. Framework preset: Vite. Click Deploy. Done — you get a live URL, and every
   push to main auto-redeploys.

**Netlify:** same flow — import from GitHub, build command `npm run build`,
publish directory `dist`.

**GitHub Pages:** run `npm run build`, then deploy the `dist/` folder using
the `gh-pages` package or GitHub Actions.

## Adding live demo links later

Once a project is deployed somewhere, just fill in its `demo` field in
`src/data/projects.js` — a "Live demo" link appears on that card automatically.
