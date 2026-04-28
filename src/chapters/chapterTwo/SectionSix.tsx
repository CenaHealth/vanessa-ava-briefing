import { Reveal } from '../../components/Reveal';
import { DefinedTerm } from '../../components/DefinedTerm';

const costs = [
  {
    title: 'It is harder.',
    body: (
      <>
        Building portable infrastructure costs more upfront than building on a vendor&rsquo;s managed platform. Cena pays an architecture tax in exchange for portability. The bet is that the value Cena compounds — clinical knowledge, case memory, workflow library, accountability records — is the part that determines whether the company has a durable future, and that none of it is safe to rent. The architecture tax is the price of keeping that future ours. We don&rsquo;t want it buried in an appendix.
      </>
    ),
  },
  {
    title: 'Vendor independence is a north star, not a dogma.',
    body: (
      <>
        We default to building portable. When a vendor&rsquo;s capability is so much better than the alternative that the cost of independence outweighs the cost of <DefinedTerm id="lockIn">lock-in</DefinedTerm> for that specific decision, we make the call deliberately and document why. The discipline is in the evaluation, not in a blanket refusal. Today, before Cena is in front of patients, the model layer is selected on the merits at evaluation time — and the architecture is built so &ldquo;today&rsquo;s choice&rdquo; is the only commitment we&rsquo;ve made.
      </>
    ),
  },
  {
    title: 'The thesis is testable, not proven.',
    body: (
      <>
        If the major <DefinedTerm id="aiVendor">AI vendors</DefinedTerm> stay roughly competitive on price, capability, and <DefinedTerm id="stewardshipRisk">stewardship</DefinedTerm> for years, the cost of independence is real and the upside is theoretical. Cena&rsquo;s bet is that they won&rsquo;t — but it is a bet, and we hold it openly.
      </>
    ),
  },
];

export function SectionSix() {
  return (
    <Reveal as="section" className="py-20">
      <div className="anti-section">
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
          Where this stance has costs
        </h2>

        <p
          className="mb-6"
          style={{
            fontSize: 'var(--text-body-02)',
            lineHeight: 1.6,
            color: 'var(--color-text-muted)',
          }}
        >
          The architectural stance has costs. We hold them openly. Three of them are worth saying plainly.
        </p>

        <ol
          className="space-y-6 m-0 p-0"
          style={{ listStyle: 'none' }}
        >
          {costs.map((cost, i) => (
            <li key={cost.title}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 10,
                  marginBottom: 6,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--text-utility-overline)',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    color: 'var(--color-text-faint)',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 600,
                    fontSize: 'var(--text-heading-04)',
                    color: 'var(--color-text-normal)',
                  }}
                >
                  {cost.title}
                </span>
              </div>
              <p
                style={{
                  fontSize: 'var(--text-body-02)',
                  lineHeight: 1.6,
                  color: 'var(--color-text-muted)',
                }}
              >
                {cost.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Reveal>
  );
}
