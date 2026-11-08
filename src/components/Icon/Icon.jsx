import { techIcons } from '../../data/techIcons';

const glyphs = {
  external: 'M7 17 17 7M9 7h8v8',
  download: 'M12 4v11m0 0 4.5-4.5M12 15l-4.5-4.5M5 20h14',
  copy: 'M9 9h10v11H9zM5 15V4h10',
  check: 'm5 12.5 4.5 4.5L19 7.5',
  menu: 'M4 8h16M4 16h16',
  close: 'm6 6 12 12M18 6 6 18',
};

export function Icon({ name, size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={glyphs[name]} />
    </svg>
  );
}

export function BrandIcon({ name, size = 18 }) {
  const path = techIcons[name];
  if (!path) return null;

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={path} />
    </svg>
  );
}
