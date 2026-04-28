import { MotifMark } from '../../components/MotifMark';
import { Reveal } from '../../components/Reveal';
import { DefinedTerm } from '../../components/DefinedTerm';

const failureModes = [
  {
    icon: 'sell',
    title: 'Pricing changes',
    body: "A vendor that controls the model's reasoning controls the price of running it. Companies built on a single vendor's API have no countermove when prices move. Cena's unit economics are protected from any single vendor's pricing because the model layer is abstracted — routing to an alternative is an integration update, not a rebuild.",
  },
  {
    icon: 'block',
    title: 'Capability changes',
    body: "Vendors deprecate models, change rate limits, restrict use cases, and update content policies on their own schedule. A product that depends on one vendor's current capability surface is one announcement away from rebuilding. Cena's workflows are designed to run against any compatible model; a deprecation becomes an integration update.",
  },
  {
    icon: 'gavel',
    title: 'Stewardship changes',
    body: "The companies that own the largest models today have not, historically, been steady stewards of customer data or platform stability. Acquisitions, restructurings, policy reversals, and regulatory action are all live risks. Cena's operational intelligence — the clinical knowledge, the case memory, the workflow library — does not live with any vendor. If every vendor we currently use disappeared overnight, Cena's institutional value would still exist.",
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
        What this stance protects against
      </h2>

      <p
        className="mb-8"
        style={{
          fontSize: 'var(--text-body-02)',
          lineHeight: 1.55,
          color: 'var(--color-text-normal)',
        }}
      >
        <DefinedTerm id="vendorIndependence">Vendor independence</DefinedTerm> isn&rsquo;t a philosophical preference. It&rsquo;s protection against three categories of risk that have already played out for companies built on a single vendor.
      </p>

      <ol
        className="space-y-6 m-0 p-0"
        style={{ listStyle: 'none' }}
      >
        {failureModes.map((mode, i) => (
          <li
            key={mode.title}
            className="card p-5"
            style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}
          >
            <div
              aria-hidden="true"
              style={{
                flex: '0 0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: 40,
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ color: 'var(--color-teal-700)', fontSize: 28 }}
              >
                {mode.icon}
              </span>
              <span
                style={{
                  marginTop: 8,
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
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
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
                {mode.title}
              </h3>
              <p
                style={{
                  fontSize: 'var(--text-body-03)',
                  lineHeight: 1.55,
                  color: 'var(--color-text-muted)',
                }}
              >
                {mode.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Reveal>
  );
}
