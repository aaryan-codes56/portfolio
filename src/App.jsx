import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { LazyMotion, MotionConfig, domAnimation, m } from 'framer-motion';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ScrollManager from './components/ScrollManager/ScrollManager';
import Home from './pages/Home';

const CaseStudy = lazy(() => import('./pages/CaseStudy'));
const NotFound = lazy(() => import('./pages/NotFound'));

function Page() {
  const location = useLocation();

  return (
    <m.main
      id="main"
      tabIndex={-1}
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      style={{ outline: 'none' }}
    >
      <Suspense fallback={<div style={{ minHeight: '100svh' }} />}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<CaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </m.main>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <LazyMotion features={domAnimation} strict>
        <MotionConfig reducedMotion="user">
          <BrowserRouter>
            <a className="skip-link" href="#main">Skip to content</a>
            <ScrollManager />
            <Navbar />
            <Page />
            <Footer />
          </BrowserRouter>
        </MotionConfig>
      </LazyMotion>
    </ErrorBoundary>
  );
}
