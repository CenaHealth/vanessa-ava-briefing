import { MotifMark } from '../components/MotifMark';
import { ComparisonBlock } from '../components/ComparisonBlock';
import { Reveal } from '../components/Reveal';

const rows = [
  {
    left: 'Bolt AI onto existing human-staffed processes.',
    right: 'Design agents-first from day zero; humans in accountability seats, not production seats.',
  },
  {
    left: 'Hire, then restructure as automation lands.',
    right: 'Never hire for a role the agent was always going to hold.',
  },
  {
    left: 'AI as a productivity tool layered onto existing work.',
    right: 'Agents as the operating model — the work is agentic by design.',
  },
];

export function SectionTwo() {
  return (
    <Reveal as="section" className="py-20" >
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
          Section 2
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
        Why this is different from what most companies are doing
      </h2>

      <div
        className="space-y-5 mb-10"
        style={{
          fontSize: 'var(--text-body-02)',
          lineHeight: 1.55,
          color: 'var(--color-text-normal)',
        }}
      >
        <p>
          Most healthcare organizations didn&rsquo;t plan to become AI companies. They hired clinical and operational staff, built approval chains around those people, and now they&rsquo;re trying to figure out where AI fits inside a structure they already own. That is genuinely hard work. It means deciding which step in the process a model handles, who reviews its output, and what to do with the staff whose jobs just partially automated. The result is a hybrid system that&rsquo;s often more expensive to manage than what came before.
        </p>
        <p>
          Cena didn&rsquo;t start that way. We designed the work to be agentic from day zero, with humans occupying the role they&rsquo;re irreplaceable in: accountability, trust, and judgment when the edge cases arrive. We never hired into roles we intended to automate later.
        </p>
        <p>
          That difference is structural. It means we don&rsquo;t carry staffing debt. And it means the path from where we are now to scale doesn&rsquo;t run through a reorganization.
        </p>
      </div>

      <ComparisonBlock
        leftLabel="The integration trap"
        rightLabel="Cena's approach"
        rows={rows}
      />
    </Reveal>
  );
}
