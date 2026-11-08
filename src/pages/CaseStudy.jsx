import { Link, useParams } from 'react-router-dom';
import { Icon } from '../components/Icon/Icon';
import ProjectImage from '../components/ProjectImage/ProjectImage';
import { featuredProjects } from '../data/projects';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import NotFound from './NotFound';
import './CaseStudy.css';

function CaseStudyContent({ project, next }) {
  useDocumentMeta(`${project.title}: case study by Aaryan Krishna`, project.summary);
  const images = [project.image, ...(project.gallery ?? [])];

  return (
    <article className="case page">
      <Link className="text-link case__back" to="/#work">All projects</Link>
      <h1 className="case__title">{project.title}</h1>
      <p className="case__summary">{project.summary}</p>

      <dl className="case__facts">
        <div><dt>Role</dt><dd>{project.role}</dd></div>
        <div><dt>When</dt><dd>{project.date}</dd></div>
        <div><dt>Built with</dt><dd>{project.stack.join(', ')}</dd></div>
      </dl>

      <ul className="case__links">
        {project.links.live && (
          <li><a className="button button--primary" href={project.links.live} target="_blank" rel="noreferrer">{project.liveLabel ?? 'Open live site'} <Icon name="external" /></a></li>
        )}
        <li><a className={`button ${project.links.live ? 'button--secondary' : 'button--primary'}`} href={project.links.code} target="_blank" rel="noreferrer">View code <Icon name="external" /></a></li>
      </ul>

      <figure className="case__figure">
        <ProjectImage image={images[0]} sizes="(min-width: 88rem) 80rem, 92vw" loading="eager" />
      </figure>

      <div className="case__body">
        <section>
          <h2>The problem</h2>
          <p>{project.problem}</p>
        </section>
        <section>
          <h2>What it does</h2>
          <p>{project.what}</p>
        </section>
        {project.contribution && (
          <section>
            <h2>My contribution</h2>
            <p>{project.contribution}</p>
          </section>
        )}
        <section>
          <h2>How it works</h2>
          <ol className="case__steps">
            {project.trace.map((step) => (
              <li key={step.label}>
                <h3>{step.label}</h3>
                <code>{step.code}</code>
                <p>{step.detail}</p>
              </li>
            ))}
          </ol>
        </section>
        <section>
          <h2>Key features</h2>
          <ul className="case__list">
            {project.features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
        </section>
        <section>
          <h2>Technical challenges</h2>
          {project.challenges.map((challenge) => (
            <div className="case__challenge" key={challenge.title}>
              <h3>{challenge.title}</h3>
              <p>{challenge.body}</p>
            </div>
          ))}
        </section>
        {project.change && (
          <section>
            <h2>What I would change</h2>
            <p>{project.change}</p>
          </section>
        )}
      </div>

      {images.slice(1).map((image) => (
        <figure className="case__figure" key={image.name}>
          <ProjectImage image={image} sizes="(min-width: 88rem) 80rem, 92vw" />
        </figure>
      ))}

      <nav className="case__next" aria-label="Next project">
        <span>Next project</span>
        <Link to={`/projects/${next.slug}`}>{next.title}</Link>
      </nav>
    </article>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const index = featuredProjects.findIndex((item) => item.slug === slug);

  if (index === -1) return <NotFound />;

  const next = featuredProjects[(index + 1) % featuredProjects.length];
  return <CaseStudyContent project={featuredProjects[index]} next={next} />;
}
