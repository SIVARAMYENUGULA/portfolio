# Yenugula Surya Naga Sivaram — Developer Portfolio

A production-quality personal portfolio built with Next.js 16 (App Router),
TypeScript, Tailwind CSS v4, Framer Motion, and Radix UI.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # ESLint
```

## Editing content

All content lives in `src/data/` and is separated from the UI:

| File | Purpose |
| --- | --- |
| `personal.ts` | Name, roles, intro, about, hero metrics |
| `experience.ts` | Work experience & internships |
| `projects.ts` | Projects (interface in `src/types`) |
| `skills.ts` | Skill groups, engineering stack, problem solving |
| `education.ts` | Education history |
| `certifications.ts` | Certifications (add `url` to enable links) |
| `achievements.ts` | Achievements |
| `social.ts` | Social links (from central config) |

Personalization (email, GitHub, LinkedIn, resume, site URL, GitHub username,
profile image) is centralized in `src/lib/constants.ts`.

## Assets

- `public/resume.pdf` — served by the "Download Resume" buttons.
- `public/images/profile.jpg` — optional profile photo (see
  `public/images/README.md`). Not displayed if absent.

## Contact form email (optional)

The contact form validates input and works out of the box. To deliver messages
by email, copy `.env.example` to `.env.local` and set `RESEND_API_KEY` and
`CONTACT_TO_EMAIL`. No API keys are hardcoded.

## Features

Dark-first theme with light mode, command palette (Ctrl/Cmd + K), project
filtering/search, project detail pages, animated counters, interactive skills,
experience timeline, contact form, scroll progress, back-to-top, a subtle
developer easter egg (type `matrix` or `sudo`), SEO metadata, JSON-LD, sitemap,
robots, custom 404, accessibility, and reduced-motion support.

## Deployment

Compatible with Vercel. After deploying, update `siteUrl` in
`src/lib/constants.ts` for canonical URLs, Open Graph, sitemap, and robots.

