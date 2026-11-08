import { Link } from 'react-router-dom';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function NotFound() {
  useDocumentMeta('Page not found: Aaryan Krishna');

  return (
    <section className="page" style={{ paddingBlock: 'calc(var(--nav-height) + var(--space-9))', minHeight: '70svh' }}>
      <h1 className="section-title">This page does not exist.</h1>
      <p>
        The link may be out of date. <Link className="text-link" to="/#work">See my projects</Link> instead.
      </p>
    </section>
  );
}
