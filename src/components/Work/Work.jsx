import { site } from '../../data/site';
import { featuredProjects } from '../../data/projects';
import FeaturedProject from '../FeaturedProject/FeaturedProject';
import { RevealHeading } from '../Reveal/Reveal';
import './Work.css';

export default function Work() {
  return (
    <section className="section page" id="work">
      <RevealHeading className="section-title">Selected work</RevealHeading>
      <div className="work__list">
        {featuredProjects.map((project, index) => (
          <FeaturedProject key={project.slug} project={project} flip={index % 2 === 1} />
        ))}
      </div>
      <p className="work__all">
        <a className="text-link" href={site.links.github} target="_blank" rel="noreferrer">See more on GitHub</a>
      </p>
    </section>
  );
}
