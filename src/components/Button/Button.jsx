import { useRef } from 'react';
import { m, useMotionValue, useSpring } from 'framer-motion';
import './Button.css';

const SPRING = { stiffness: 220, damping: 18, mass: 0.4 };
const PULL = 0.22;

// Link styled as a button. `magnetic` makes it lean toward a fine pointer.
export default function Button({ variant = 'primary', magnetic = false, className = '', children, ...props }) {
  const ref = useRef(null);
  const x = useSpring(useMotionValue(0), SPRING);
  const y = useSpring(useMotionValue(0), SPRING);

  const follow = (event) => {
    if (!magnetic || event.pointerType !== 'mouse') return;
    const box = ref.current.getBoundingClientRect();
    x.set((event.clientX - box.left - box.width / 2) * PULL);
    y.set((event.clientY - box.top - box.height / 2) * PULL);
  };

  const release = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <m.a
      ref={ref}
      className={`button button--${variant} ${className}`}
      style={{ x, y }}
      onPointerMove={follow}
      onPointerLeave={release}
      {...props}
    >
      {children}
    </m.a>
  );
}
