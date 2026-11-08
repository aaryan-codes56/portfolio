import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const MAX_ATTEMPTS = 40;

// Handles scroll position and focus when the route or hash changes.
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation();
  const previousPath = useRef(pathname);

  useEffect(() => {
    let frame;
    let attempts = 0;

    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      const scrollToTarget = () => {
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ block: 'start' });
        } else if (attempts < MAX_ATTEMPTS) {
          attempts += 1;
          frame = requestAnimationFrame(scrollToTarget);
        }
      };
      scrollToTarget();
    } else if (pathname !== previousPath.current) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }

    if (pathname !== previousPath.current) {
      document.getElementById('main')?.focus({ preventScroll: true });
      previousPath.current = pathname;
    }

    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, key]);

  return null;
}
