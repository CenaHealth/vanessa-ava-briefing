import { useEffect } from 'react';
import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { ChapterOne } from './routes/ChapterOne';
import { ChapterTwo } from './routes/ChapterTwo';
import { Glossary } from './routes/Glossary';

type Topic = {
  label: string;
  to?: string; // when omitted, the pill is inactive (chapter not yet shipped)
};

const topics: Topic[] = [
  { label: 'Agents-first', to: '/' },
  { label: 'Vendor independence', to: '/vendor-independence' },
  { label: 'Build vs. buy' },
  { label: 'AVA mental model' },
  { label: 'Knowledge layer' },
  { label: 'Glossary', to: '/glossary' },
];

function TopBar() {
  return (
    <div
      className="sticky top-0 z-40 w-full"
      style={{
        background: 'rgba(245, 238, 229, 0.85)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid var(--color-border-default)',
      }}
    >
      <div className="mx-auto max-w-[1200px] flex items-center px-6 py-3">
        <Link
          to="/"
          aria-label="Cena Health — return to chapter one"
          style={{ display: 'inline-flex', alignItems: 'center' }}
        >
          <img
            src={`${import.meta.env.BASE_URL}logo-cenahealth-teal.svg`}
            alt="Cena Health"
            height={28}
            style={{ height: 28, width: 'auto' }}
          />
        </Link>
      </div>
    </div>
  );
}

function TopicNavStrip() {
  const { pathname } = useLocation();
  return (
    <div className="mx-auto max-w-[1200px] px-6 pt-6 pb-2 overflow-x-auto">
      <div className="flex gap-2 whitespace-nowrap">
        {topics.map((t) => {
          if (!t.to) {
            return (
              <span key={t.label} className="pill" data-state="inactive">
                {t.label}
              </span>
            );
          }
          const isActive = pathname === t.to;
          return (
            <Link
              key={t.label}
              to={t.to}
              className="pill"
              data-state={isActive ? 'active' : 'link'}
              style={{ textDecoration: 'none' }}
            >
              {t.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer
      className="mt-12 py-8 text-center"
      style={{
        borderTop: '1px solid var(--color-border-default)',
        fontSize: 'var(--text-body-04)',
        color: 'var(--color-text-faint)',
      }}
    >
      <img
        src={`${import.meta.env.BASE_URL}logo-cenahealth-teal.svg`}
        alt=""
        height={20}
        style={{ height: 20, width: 'auto', display: 'inline-block', marginRight: 12, verticalAlign: 'middle', opacity: 0.7 }}
      />
      <span>&copy; Cena Health</span>
    </footer>
  );
}

function ScrollToTopOnNav() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

function Shell() {
  return (
    <>
      <ScrollToTopOnNav />
      <TopBar />
      <TopicNavStrip />
      <Routes>
        <Route path="/" element={<ChapterOne />} />
        <Route path="/vendor-independence" element={<ChapterTwo />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

export function App() {
  // BASE_URL ends with a slash (e.g. "/vanessa-ava-briefing/"); BrowserRouter
  // basename should not have a trailing slash.
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '');
  return (
    <BrowserRouter basename={basename}>
      <Shell />
    </BrowserRouter>
  );
}
