import { Component } from 'react';
import { site } from '../../data/site';

export default class ErrorBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (!this.state.failed) return this.props.children;

    return (
      <main className="page" style={{ paddingBlock: '8rem' }}>
        <h1>This page could not load.</h1>
        <p style={{ marginTop: '1rem' }}>
          Reload to try again, or reach me at{' '}
          <a className="text-link" href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </main>
    );
  }
}
