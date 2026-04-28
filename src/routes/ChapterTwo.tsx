import { useEffect } from 'react';
import { Hero } from '../chapters/chapterTwo/Hero';
import { SectionTwo } from '../chapters/chapterTwo/SectionTwo';
import { SectionThree } from '../chapters/chapterTwo/SectionThree';
import { SectionFour } from '../chapters/chapterTwo/SectionFour';
import { SectionFive } from '../chapters/chapterTwo/SectionFive';
import { SectionSix } from '../chapters/chapterTwo/SectionSix';
import { SectionSeven } from '../chapters/chapterTwo/SectionSeven';
import {
  GlossarySidebarDesktop,
  GlossarySidebarMobile,
  type GlossaryEntry,
} from '../components/GlossarySidebar';

const glossary: GlossaryEntry[] = [
  {
    term: 'Agent',
    definition:
      'A software system that uses an AI model to reason about a task, take actions, and produce output. Different from a chatbot: it has tools, memory, and a defined job.',
  },
  {
    term: 'AVA',
    definition:
      'Cena’s name for the integrated system of agents, knowledge, and tools that does the clinical and operational work.',
  },
  {
    term: 'LLM (large language model)',
    definition:
      'The AI engine that does the reading, writing, and reasoning inside every Cena agent. Modern LLMs handle expert-level work across long, complex tasks. Cena chooses which LLM to use — we don’t depend on any one vendor.',
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
  {
    term: 'Inference',
    definition:
      "The act of running a prompt through an AI model to produce output — the “thing the AI vendor sells.” Cena treats it as a commodity input.",
  },
  {
    term: 'AI vendor / model vendor',
    definition:
      "The company that sells inference. Used in this briefing to distinguish from “provider,” which in healthcare means a clinician or clinical practice.",
  },
  {
    term: 'MCP (Model Context Protocol)',
    definition:
      "An open standard for letting agents use tools across different AI models. Cena’s tool interface is built on MCP so workflows stay portable.",
  },
  {
    term: 'Lock-in',
    definition:
      "The state in which switching AI vendors requires rebuilding significant parts of the product. Cena’s architecture is designed so switching is an integration update, not a rebuild.",
  },
  {
    term: 'Stewardship risk',
    definition:
      "The risk that an AI vendor changes pricing, deprecates features, restricts use cases, or is acquired/restructured in ways that disrupt customers built on its platform.",
  },
];

export function ChapterTwo() {
  useEffect(() => {
    document.title = 'Cena Health — Vendor Independence';
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
