import { skillGroups } from '../../data/profile';
import { BrandIcon } from '../Icon/Icon';
import { RevealHeading } from '../Reveal/Reveal';
import './Skills.css';

export default function Skills() {
  return (
    <section className="section page" id="skills">
      <RevealHeading className="section-title">Skills</RevealHeading>
      <dl className="skills">
        {skillGroups.map((group) => (
          <div className="skills__row" key={group.name}>
            <dt className="skills__group">{group.name}</dt>
            <dd>
              <ul className="skills__list">
                {group.skills.map(([label, icon]) => (
                  <li className="skills__item" key={label}>
                    <BrandIcon name={icon} />
                    {label}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
