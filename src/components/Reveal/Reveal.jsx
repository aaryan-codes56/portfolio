import { m, useReducedMotion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

// A heading whose text rises from behind a mask the first time it is seen.
export function RevealHeading({ as = 'h2', className, children, id }) {
  const Tag = as;

  return (
    <Tag className={className} id={id} style={{ overflow: 'hidden', paddingBottom: '0.12em' }}>
      <m.span
        style={{ display: 'block' }}
        initial={{ y: '110%' }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: '0px 0px -8% 0px' }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        {children}
      </m.span>
    </Tag>
  );
}

// Uncovers a block with a clip from below, used for project media.
export function RevealMedia({ className, children }) {
  const reduceMotion = useReducedMotion();

  // Clip paths are not covered by MotionConfig's reduced-motion handling.
  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <m.div
      className={className}
      initial={{ clipPath: 'inset(0 0 22% 0)', opacity: 0.4 }}
      whileInView={{ clipPath: 'inset(0 0 0% 0)', opacity: 1 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.9, ease: EASE }}
    >
      {children}
    </m.div>
  );
}
