import { useState } from 'react';
import './ProjectTrace.css';

// Steps through a real request path from the project's code.
export default function ProjectTrace({ steps, title }) {
  const [active, setActive] = useState(0);
  const progress = active / (steps.length - 1);

  return (
    <div className="trace">
      <ol className="trace__rail" style={{ '--progress': progress, '--steps': steps.length }} aria-label={`How ${title} works, step by step`}>
        {steps.map((step, index) => (
          <li key={step.label}>
            <button
              type="button"
              className={`trace__step ${index <= active ? 'is-reached' : ''}`}
              aria-current={index === active ? 'step' : undefined}
              onPointerEnter={(event) => event.pointerType === 'mouse' && setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
            >
              <span className="trace__dot" />
              <span className="trace__label">{step.label}</span>
            </button>
          </li>
        ))}
      </ol>

      <div className="trace__panel">
        {steps.map((step, index) => (
          <div className={`trace__detail ${index === active ? 'is-visible' : ''}`} key={step.label} aria-hidden={index !== active}>
            <code>{step.code}</code>
            <p>{step.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
