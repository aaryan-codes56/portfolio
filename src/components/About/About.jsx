import { aboutParagraphs, education } from '../../data/profile';
import { RevealHeading } from '../Reveal/Reveal';
import './About.css';

export default function About() {
  return (
    <section className="section page about" id="about">
      <RevealHeading className="section-title">About</RevealHeading>
      <div>
        {aboutParagraphs.map((paragraph) => (
          <p className="about__text" key={paragraph}>{paragraph}</p>
        ))}

        <h3 className="about__education-title">Education</h3>
        <p className="about__degree">{education.degree}</p>
        <p className="about__school">{education.school}, {education.period}</p>
        <p className="about__school">Relevant coursework: {education.coursework}</p>
      </div>
    </section>
  );
}
