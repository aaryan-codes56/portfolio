import { useEffect, useState } from 'react';

// Tracks which section crosses the middle of the viewport.
export function useActiveSection(ids, enabled) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!enabled) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { id } = entry.target;
          setActive((current) => {
            if (entry.isIntersecting) return id;
            return current === id ? null : current;
          });
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [ids, enabled]);

  return enabled ? active : null;
}
