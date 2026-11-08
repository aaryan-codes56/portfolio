import portrait from '../../assets/portrait.webp';
import { site } from '../../data/site';
import Button from '../Button/Button';
import { Icon } from '../Icon/Icon';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="page hero__inner">
        <div className="hero__text">
          <h1 className="hero__name hero__rise">{site.name}</h1>
          <p className="hero__headline hero__rise" style={{ '--delay': '90ms' }}>{site.headline}</p>
          <p className="hero__intro hero__rise" style={{ '--delay': '180ms' }}>{site.intro}</p>

          <div className="hero__actions hero__rise" style={{ '--delay': '270ms' }}>
            <Button href="#work" magnetic>View projects</Button>
            <Button href={site.resume} download variant="secondary">
              Download resume <Icon name="download" />
            </Button>
          </div>

          <ul className="hero__social hero__rise" style={{ '--delay': '360ms' }}>
            <li><a className="text-link" href={site.links.github} target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a className="text-link" href={site.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </div>

        <img
          className="hero__portrait hero__rise"
          style={{ '--delay': '120ms' }}
          src={portrait}
          width="720"
          height="720"
          alt="Portrait of Aaryan Krishna"
          fetchPriority="high"
        />
      </div>
    </section>
  );
}
