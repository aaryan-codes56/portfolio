// Runs after `vite build`. Gives each case study its own HTML shell with the
// right title and preview tags, and writes the sitemap.
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { featuredProjects } from '../src/data/projects.js';
import { site } from '../src/data/site.js';

const dist = join(import.meta.dirname, '..', 'dist');
const shell = await readFile(join(dist, 'index.html'), 'utf8');

const escapeHtml = (text) => text.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');

function withMeta(html, { title, description, url }) {
  const safeTitle = escapeHtml(title);
  const safeDescription = escapeHtml(description);

  return html
    .replace(/<title>.*?<\/title>/, `<title>${safeTitle}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${safeDescription}`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${safeTitle}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${safeDescription}`)
    .replace(/(<meta name="twitter:title" content=")[^"]*/, `$1${safeTitle}`)
    .replace(/(<meta name="twitter:description" content=")[^"]*/, `$1${safeDescription}`);
}

const urls = [`${site.url}/`];

for (const project of featuredProjects) {
  const url = `${site.url}/projects/${project.slug}`;
  const directory = join(dist, 'projects', project.slug);
  await mkdir(directory, { recursive: true });
  await writeFile(
    join(directory, 'index.html'),
    withMeta(shell, { title: `${project.title}: case study by ${site.name}`, description: project.summary, url }),
  );
  urls.push(url);
}

const entries = urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n');
await writeFile(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`,
);

console.log(`Generated ${urls.length - 1} case study pages and sitemap.xml`);
