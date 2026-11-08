# Aaryan Krishna: portfolio

Personal portfolio for software, full-stack, data and AI/ML internship applications.
Live at [aaryankrishna.vercel.app](https://aaryankrishna.vercel.app).

Built with React 19, Vite 7, React Router 7, Framer Motion (via `LazyMotion`) and plain CSS with design tokens.
Fonts are self-hosted. The contact form uses EmailJS.

## Run locally

Requires Node 20.19 or newer.

```bash
npm install
npm run dev       # http://localhost:5173
npm run lint
npm run build     # outputs dist/, including one HTML shell per case study and sitemap.xml
npm run preview   # serves the production build at http://localhost:4173
```

## Deploy

The site is set up for Vercel. Pushing to `main` deploys it if the repository is connected to the project.
To deploy by hand:

```bash
npx vercel --prod
```

Vercel detects Vite and uses `npm run build` with the `dist` output folder. `vercel.json` adds the single-page
fallback and long-lived caching for hashed assets. If the domain changes, update `site.url` in `src/data/site.js`,
the URLs in `index.html` and the sitemap line in `public/robots.txt`.

The EmailJS IDs in `src/data/site.js` are public by design. To override them, set `VITE_EMAILJS_SERVICE_ID`,
`VITE_EMAILJS_TEMPLATE_ID` and `VITE_EMAILJS_PUBLIC_KEY`. The EmailJS template uses `user_name`, `user_email` and `message`.

## Edit the content

Content lives apart from the components, so most updates do not touch JSX.

| What | Where |
| --- | --- |
| Name, links, email, hero text | `src/data/site.js` |
| Projects and case studies | `src/data/projects.js` |
| Skills, experience, education, about text | `src/data/profile.js` |
| Project screenshots | `src/assets/projects/<name>-720.webp` and `<name>-1440.webp` |
| Resume | `public/Aaryan-Krishna-Resume.pdf` |
| Colours, type scale, spacing, motion | `src/styles/tokens.css` |

## Project structure

```text
public/              favicon, resume, social preview, robots.txt
scripts/             post-build HTML shells and sitemap
src/
  assets/            portrait and project screenshots
  components/        one folder per component, with its CSS
  data/              all site content
  hooks/             page metadata and active-section tracking
  pages/             Home, CaseStudy, NotFound
  styles/            tokens and global CSS
```

## Motion rules

The hero fades in once on load. Everything else answers scrolling or input: masked headings, media reveals, the
magnetic primary button and the project step rails. All of it respects `prefers-reduced-motion`.
