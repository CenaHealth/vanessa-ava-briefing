import { MotifMark } from '../../components/MotifMark';
import { Reveal } from '../../components/Reveal';
import { ChapterPromptCard, type CardState } from '../../components/ChapterPromptCard';
import { AvaInviteCta } from '../../components/AvaInviteCta';
import { DefinedTerm } from '../../components/DefinedTerm';

type Card = {
  chapterNumber: string;
  title: string;
  question: string;
  hook: string;
  state: CardState;
  to?: string;
};

const cards: Card[] = [
  {
    chapterNumber: 'Chapter 2',
    title: 'Vendor Independence',
    question: "Aren't you just a wrapper on OpenAI?",
    hook: 'Cena uses AI models the way a hospital uses electricity — critical, swappable, and not where the value lives.',
    state: 'shipped',
    to: '/vendor-independence',
  },
  {
    chapterNumber: 'Chapter 5',
    title: 'Build vs. Buy',
    question: 'Where do you draw the line?',
    hook: "We buy the model's reasoning. We build everything that would walk out the door if we switched AI vendors.",
    state: 'next',
  },
  {
    chapterNumber: 'Chapter 4',
    title: 'The AVA Mental Model',
    question: 'How do all the pieces fit together?',
    hook: 'AVA is the system — agents, knowledge layer, tools, and the human approval step — working as a single operating unit, not a stack of separate tools.',
    state: 'queued',
  },
  {
    chapterNumber: 'Chapter 3',
    title: 'The Shared Knowledge Layer',
    question: "What's actually inside ava-brain?",
    hook: 'The accumulated clinical and operational knowledge Cena is building — structured so any agent can draw on it, and none of it lives with a vendor.',
    state: 'queued',
  },
];

export function SectionSeven() {
  return (
    <Reveal as="section" className="py-20">
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.7)',
          border: '1px solid var(--color-border-default)',
          borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-elevation-02)',
          padding: 32,
        }}
      >
        <div className="flex items-center gap-2 mb-4">
          <MotifMark />
          <span
            style={{
              fontSize: 'var(--text-utility-overline)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 600,
              color: 'var(--color-text-faint)',
            }}
          >
            Section 7
          </span>
        </div>
        <h2
          className="mb-6"
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 500,
            fontSize: 'var(--text-heading-02)',
            lineHeight: 1.25,
            color: 'var(--color-text-normal)',
          }}
        >
          Help us decide what comes next
        </h2>

        <div
          className="space-y-4 mb-8"
          style={{
            fontSize: 'var(--text-body-02)',
            lineHeight: 1.6,
            color: 'var(--color-text-normal)',
          }}
        >
          <p>This is chapter one. What you just read is our clearest current statement of how Cena thinks about <DefinedTerm id="agent">agents</DefinedTerm> and the work they do.</p>
          <p>
            Chapter two — <DefinedTerm id="vendorIndependence">vendor independence</DefinedTerm> — is now live. Three more chapters are queued: where we draw the line between building and buying, how <DefinedTerm id="ava">AVA</DefinedTerm> fits together as a system, and what&rsquo;s actually inside the shared <DefinedTerm id="knowledgeLayer">knowledge layer</DefinedTerm>. We&rsquo;ll write the next one based on what you ask.
          </p>
          <p>
            If something on this page surprised you, confused you, or made you think of a question you&rsquo;d want to answer in a real conversation, the experience team would like to hear about it. Your reaction shapes what we write next.
          </p>
        </div>

        <div className="mb-10">
          <AvaInviteCta
            href="mailto:experience@cenahealth.com?subject=AVA%20Briefing%20%E2%80%94%20Chapter%201%20reaction"
            label="Contact the experience team"
            microcopy="Your reaction shapes the next chapter."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((c) => (
            <ChapterPromptCard
              key={c.chapterNumber}
              chapterNumber={c.chapterNumber}
              title={c.title}
              question={c.question}
              hook={c.hook}
              state={c.state}
              to={c.to}
            />
          ))}
        </div>
      </div>
    </Reveal>
  );
}
