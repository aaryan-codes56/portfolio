import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navItems, site } from '../../data/site';
import { useActiveSection } from '../../hooks/useActiveSection';
import { Icon } from '../Icon/Icon';
import './Navbar.css';

const SECTION_IDS = navItems.map((item) => item.id);
const SCROLLED_AFTER = 24;

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS, pathname === '/');

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > SCROLLED_AFTER);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    const closeOnDesktop = window.matchMedia('(min-width: 56rem)');
    const close = () => setOpen(false);

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    closeOnDesktop.addEventListener('change', close);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', closeOnEscape);
      closeOnDesktop.removeEventListener('change', close);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled || open ? 'nav--solid' : ''}`}>
      <nav className="page nav__bar" aria-label="Main">
        <Link className="nav__mark" to="/" onClick={close} aria-label={`${site.name}, home`}>
          <img src="/favicon.svg" width="34" height="34" alt="" />
        </Link>

        <ul className="nav__links">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                className={`nav__link ${active === item.id ? 'is-active' : ''}`}
                to={`/#${item.id}`}
                aria-current={active === item.id ? 'true' : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <a className="nav__resume" href={site.resume} download>
          Resume <Icon name="download" size={15} />
        </a>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? 'close' : 'menu'} size={24} />
        </button>
      </nav>

      {open && (
        <div className="nav__sheet" id="mobile-menu">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <Link to={`/#${item.id}`} onClick={close}>{item.label}</Link>
              </li>
            ))}
            <li><a href={site.resume} download onClick={close}>Resume</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
