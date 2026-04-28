import { Reveal } from '../../components/Reveal';

export function SectionSix() {
  return (
    <Reveal as="section" className="py-20">
      <div className="anti-section" style={{ maxWidth: 560 }}>
        <span
          style={{
            fontSize: 'var(--text-utility-overline)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontWeight: 600,
            color: 'var(--color-text-faint)',
            display: 'inline-block',
            marginBottom: 12,
          }}
        >
          Section 6
        </span>
        <h2
          className="mb-6"
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 500,
            fontSize: 'var(--text-heading-02)',
            lineHeight: 1.25,
            color: 'var(--color-text-muted)',
          }}
        >
          Where this thesis goes wrong
        </h2>

        <div
          className="space-y-5"
          style={{
            fontSize: 'var(--text-body-02)',
            lineHeight: 1.6,
            color: 'var(--color-text-muted)',
          }}
        >
          <p>Cena&rsquo;s approach has limits. We hold them honestly.</p>
          <p>
            Agents make mistakes. The human approval step exists because we expect it — not as a failsafe against a rare edge case, but as a structural feature of the model. Agents-first doesn&rsquo;t mean agents-infallible. It means agents are reliably better at the domain reasoning than the alternative — and the human is there to catch what they&rsquo;re not.
          </p>
          <p>
            Running agents-first requires infrastructure most clinical organizations haven&rsquo;t built: a knowledge layer, evaluation systems, structured processes for building and maintaining trust in agent outputs. Buying an AI tool is easier. Building an agents-first operating model is not. We&rsquo;re doing the harder thing because we believe the economics and quality outcomes justify it.
          </p>
          <p>
            The thesis is testable. Cena&rsquo;s pilots are the proof. If agents-first doesn&rsquo;t produce better outcomes and better economics than human-staffed alternatives, the thesis is wrong. We&rsquo;re betting it will — and we&rsquo;re building the measurement capability to find out.
          </p>
        </div>
      </div>
    </Reveal>
  );
}
