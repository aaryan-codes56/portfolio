import { site } from '../../data/site';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="page footer__inner">
        <p>&copy; {new Date().getFullYear()} {site.name}</p>
        <ul className="footer__links">
          <li><a className="text-link" href={site.links.github} target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a className="text-link" href={site.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a className="text-link" href={site.links.leetcode} target="_blank" rel="noreferrer">LeetCode</a></li>
          <li><a className="text-link" href="#main">Back to top</a></li>
        </ul>
      </div>
    </footer>
  );
}
