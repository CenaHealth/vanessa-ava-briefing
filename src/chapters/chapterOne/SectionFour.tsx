import { MotifMark } from '../../components/MotifMark';
import { Reveal } from '../../components/Reveal';
import { DefinedTerm } from '../../components/DefinedTerm';

const roles = [
  {
    title: 'Accountability',
    body: 'A human approves the outcome. The agent’s confidence level does not transfer legal or operational responsibility.',
    icon: 'verified',
  },
  {
    title: 'Trust',
    body: 'Patients, partners, and regulators trust people. The human’s role is to be the credentialed, accountable presence the work depends on.',
    icon: 'handshake',
  },
  {
    title: 'Judgment at the edges',
    body: 'When confidence is low, the case is novel, or ethics and tradeoffs are in play, that is the human’s seat.',
    icon: 'balance',
  },
];

export function SectionFour() {
  return (
    <Reveal as="section" className="py-20">
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
          Section 4
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
        What humans do, in this model
      </h2>

      <div
        className="space-y-5 mb-8"
        style={{
          fontSize: 'var(--text-body-02)',
          lineHeight: 1.55,
          color: 'var(--color-text-normal)',
        }}
      >
        <p>Agents-first is not a proposal to remove humans. It&rsquo;s a proposal about where humans are most valuable.</p>
        <p>
          An <DefinedTerm id="agent">agent</DefinedTerm> can reason through a clinical protocol, surface a recommendation with its work shown, and flag where its confidence is lower. What the <DefinedTerm id="agent">agent</DefinedTerm> cannot do is bear legal or professional responsibility for what happens next, be trusted by a patient as a person who cares, or navigate the genuinely novel situation where no pattern fully applies. Those are human seats — and in every Cena workflow, a credentialed clinician holds them.
        </p>
        <p>
          In every Cena workflow, a named human <DefinedTerm id="approval">approves the output</DefinedTerm>. That step isn&rsquo;t a formality — it&rsquo;s the foundation the whole model rests on.
        </p>
      </div>

      <p className="prose-callout my-8" style={{ fontSize: 'var(--text-body-02)', lineHeight: 1.5 }}>
        The approval builds the track record. The track record builds the trust. The trust is what allows the system to operate at scale over time.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {roles.map((r) => (
          <div key={r.title}>
            <span
              className="material-symbols-outlined mb-3"
              aria-hidden="true"
              style={{ color: 'var(--color-teal-700)', fontSize: 32 }}
            >
              {r.icon}
            </span>
            <h3
              className="mb-2"
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 500,
                fontSize: 'var(--text-heading-03)',
                lineHeight: 1.3,
                color: 'var(--color-text-normal)',
              }}
            >
              {r.title}
            </h3>
            <p
              style={{
                fontSize: 'var(--text-body-02)',
                lineHeight: 1.5,
                color: 'var(--color-text-muted)',
              }}
            >
              {r.body}
            </p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
