import { Link } from 'react-router-dom';
import ProjectTrace from '../ProjectTrace/ProjectTrace';
import ProjectImage from '../ProjectImage/ProjectImage';
import { Icon } from '../Icon/Icon';
import { RevealMedia } from '../Reveal/Reveal';
import './FeaturedProject.css';

export default function FeaturedProject({ project, flip }) {
  const caseStudy = `/projects/${project.slug}`;

  return (
    <article className={`feature ${flip ? 'feature--flip' : ''}`}>
      <RevealMedia className="feature__media">
        <Link to={caseStudy} tabIndex={-1} aria-hidden="true">
          <ProjectImage image={project.image} sizes="(min-width: 64rem) 58vw, 100vw" className="feature__image" />
        </Link>
      </RevealMedia>

      <div className="feature__text">
        <h3 className="feature__title">
          <Link to={caseStudy}>{project.title}</Link>
        </h3>
        <p className="feature__meta">{project.meta}</p>
        <p className="feature__summary">{project.summary}</p>
        <p className="feature__stack">{project.stack.join(', ')}</p>

        <ul className="feature__links">
          <li><Link className="text-link" to={caseStudy}>Read the case study</Link></li>
          {project.links.live && (
            <li>
              <a className="text-link feature__ext" href={project.links.live} target="_blank" rel="noreferrer">
                {project.liveLabel ?? 'Live site'} <Icon name="external" size={14} />
              </a>
            </li>
          )}
          <li>
            <a className="text-link feature__ext" href={project.links.code} target="_blank" rel="noreferrer">
              Code <Icon name="external" size={14} />
            </a>
          </li>
        </ul>
      </div>

      <div className="feature__trace">
        <ProjectTrace steps={project.trace} title={project.title} />
      </div>
    </article>
  );
}
