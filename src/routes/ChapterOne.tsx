import { useEffect } from 'react';
import { Hero } from '../chapters/chapterOne/Hero';
import { SectionTwo } from '../chapters/chapterOne/SectionTwo';
import { SectionThree } from '../chapters/chapterOne/SectionThree';
import { SectionFour } from '../chapters/chapterOne/SectionFour';
import { SectionFive } from '../chapters/chapterOne/SectionFive';
import { SectionSix } from '../chapters/chapterOne/SectionSix';
import { SectionSeven } from '../chapters/chapterOne/SectionSeven';
import {
  GlossarySidebarDesktop,
  GlossarySidebarMobile,
  type GlossaryEntry,
} from '../components/GlossarySidebar';

const glossary: GlossaryEntry[] = [
  {
    term: 'Agent',
    definition:
      'A software system that uses a language model to reason about a task, take actions, and produce output. Different from a chatbot: it has tools, memory, and a defined job.',
  },
  {
    term: 'LLM (large language model)',
    definition:
      'The AI engine that does the reading, writing, and reasoning inside every Cena agent. Modern LLMs are capable enough to handle expert-level work across long, complex tasks. Cena chooses which LLM to use — we don’t depend on any one vendor.',
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

export function ChapterOne() {
  useEffect(() => {
    document.title = 'Cena Health — Agents-First Thesis';
  }, []);

  return (
    <>
      <Hero />

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
    </>
  );
}
