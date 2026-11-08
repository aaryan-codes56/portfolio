import { experience, leetcode } from '../../data/profile';
import { site } from '../../data/site';
import { Icon } from '../Icon/Icon';
import { RevealHeading } from '../Reveal/Reveal';
import './Experience.css';

export default function Experience() {
  return (
    <section className="section page" id="experience">
      <RevealHeading className="section-title">Experience and achievements</RevealHeading>

      <ol className="timeline">
        {experience.map((item) => (
          <li className="timeline__item" key={item.title}>
            <p className="timeline__when">{item.when}</p>
            <div>
              <h3 className="timeline__title">{item.title}</h3>
              <p className="timeline__body">{item.body}</p>
              {item.href && (
                <a className="text-link timeline__link" href={item.href} target="_blank" rel="noreferrer">
                  {item.hrefLabel} <Icon name="external" size={14} />
                </a>
              )}
            </div>
          </li>
        ))}
        <li className="timeline__item">
          <p className="timeline__when">Ongoing</p>
          <div>
            <h3 className="timeline__title">{leetcode.solved} LeetCode problems solved</h3>
            <p className="timeline__body">
              {leetcode.easy} easy, {leetcode.medium} medium and {leetcode.hard} hard.
            </p>
            <a className="text-link timeline__link" href={site.links.leetcode} target="_blank" rel="noreferrer">
              View the profile <Icon name="external" size={14} />
            </a>
          </div>
        </li>
      </ol>
    </section>
  );
}
