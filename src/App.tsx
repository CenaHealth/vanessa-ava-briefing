import { Hero } from './sections/Hero';
import { SectionTwo } from './sections/SectionTwo';
import { SectionThree } from './sections/SectionThree';
import { SectionFour } from './sections/SectionFour';
import { SectionFive } from './sections/SectionFive';
import { SectionSix } from './sections/SectionSix';
import { SectionSeven } from './sections/SectionSeven';
import {
  GlossarySidebarDesktop,
  GlossarySidebarMobile,
  type GlossaryEntry,
} from './components/GlossarySidebar';

const glossary: GlossaryEntry[] = [
  {
    term: 'Agent',
    definition:
      'A software system that uses a language model to reason about a task, take actions, and produce output. Different from a chatbot: it has tools, memory, and a defined job.',
  },
  {
    term: 'LLM (large language model)',
    definition:
      'The AI engine that does the reading, writing, and reasoning inside every Cena agent. Modern LLMs are capable enough to handle expert-level work across long, complex tasks. Cena chooses which LLM to use — we don’t depend on any one provider.',
  },
  {
    term: 'AVA',
    definition:
      'Cena’s name for the integrated system of agents, knowledge, and tools that does the clinical and operational work.',
  },
  {
    term: 'Memory layer',
    definition:
      'Where an agent stores what it has learned about a case, a workflow, or a domain. Cena owns its memory layer — it doesn’t live with a vendor.',
  },
  {
    term: 'Knowledge layer (ava-brain)',
    definition:
      'The corpus of clinical and operational knowledge Cena is building, which agents draw on when reasoning through a case.',
  },
  {
    term: 'Approval / accountability step',
    definition:
      'The human review point in every Cena workflow. A credentialed clinician approves agent output before it moves forward. The agent’s confidence level does not transfer responsibility — the approver holds it.',
  },
  {
    term: 'Vendor independence',
    definition:
      'Cena’s stance that switching the underlying AI model should not require rebuilding the business. The model is swappable; the knowledge and workflows are not.',
  },
];

const topics = [
  { label: 'Agents-first', state: 'active' as const },
  { label: 'Vendor independence', state: 'inactive' as const },
  { label: 'Knowledge layer', state: 'inactive' as const },
  { label: 'AVA mental model', state: 'inactive' as const },
  { label: 'Build vs. buy', state: 'inactive' as const },
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
        <img
          src={`${import.meta.env.BASE_URL}logo-cenahealth-teal.svg`}
          alt="Cena Health"
          height={28}
          style={{ height: 28, width: 'auto' }}
        />
      </div>
    </div>
  );
}

function TopicNavStrip() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 pt-6 pb-2 overflow-x-auto">
      <div className="flex gap-2 whitespace-nowrap">
        {topics.map((t) => (
          <span key={t.label} className="pill" data-state={t.state}>
            {t.label}
          </span>
        ))}
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

export function App() {
  return (
    <>
      <TopBar />
      <TopicNavStrip />

      <Hero />

      {/* Reading region: 720 column on mobile/tablet; xl viewports get a sticky
          glossary sidebar to the right of the column. */}
      <div className="mx-auto max-w-[1080px] xl:max-w-[1200px] px-6">
        <div className="xl:flex xl:items-start xl:gap-0">
          <main style={{ maxWidth: 720, width: '100%', margin: '0 auto' }}>
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
            <SectionSeven />
          </main>
          <GlossarySidebarDesktop entries={glossary} />
        </div>
      </div>

      <GlossarySidebarMobile entries={glossary} />

      <Footer />
    </>
  );
}
