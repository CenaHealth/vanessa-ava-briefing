import { MotifMark } from '../../components/MotifMark';
import { Reveal } from '../../components/Reveal';
import { AudienceTabs, type AudienceTab } from '../../components/AudienceTabs';
import { DefinedTerm } from '../../components/DefinedTerm';

const tabs: AudienceTab[] = [
  {
    key: 'client',
    label: "I'm a client",
    content: (
      <>
        <p>
          When you receive care that includes Cena&rsquo;s tools, your physician remains your physician. The licensed clinician at your health system — the one who already holds your trust and your record — reviews and approves your care plan. What changes is the depth of reasoning the <DefinedTerm id="agent">agent</DefinedTerm> brings to the recommendation that clinician is reviewing.
        </p>
        <p>
          An <DefinedTerm id="agent">agent</DefinedTerm> works through your case — surfacing relevant history, running protocol logic, showing its work — before the clinician reviews and approves. This is how Cena is built to operate; pilots are validating the model end-to-end. You don&rsquo;t receive less attention as a result. You receive more thorough preparation, at a pace that a fully human-staffed team couldn&rsquo;t sustain.
        </p>
        <p style={{ fontWeight: 600, color: 'var(--color-text-normal)' }}>
          Your care is still signed off by a person. The analysis behind it is sharper.
        </p>
      </>
    ),
  },
  {
    key: 'partner',
    label: "I'm a partner",
    content: (
      <>
        <p>
          The throughput of a Cena partnership is not gated by Cena&rsquo;s headcount. When case volume grows, the <DefinedTerm id="agent">agent</DefinedTerm> capacity scales to meet it. A traditional clinical group grows by hiring — a constraint that creates long runways, fixed costs, and limits on how quickly a partnership can expand.
        </p>
        <p style={{ fontWeight: 600, color: 'var(--color-text-normal)' }}>
          What Cena brings to a health system relationship is operational capacity that moves with demand, while licensed clinicians retain accountability for every clinical decision. The scope of what we can take on doesn&rsquo;t require us to get bigger first — and it doesn&rsquo;t require you to change who&rsquo;s responsible for care.
        </p>
      </>
    ),
  },
  {
    key: 'investor',
    label: "I'm an investor",
    content: (
      <>
        <p>
          Most clinical-services companies will spend the next several years hiring to meet demand and then restructuring around AI as it matures. That creates staffing debt — and it&rsquo;s a real cost that will show up in unit economics.
        </p>
        <p style={{ fontWeight: 600, color: 'var(--color-text-normal)' }}>
          Cena starts on the other side of that transition. Our capacity scales with the <DefinedTerm id="agent">agent</DefinedTerm> stack, not the headcount. The constraint on growth isn&rsquo;t &ldquo;how fast can we hire and train clinicians&rdquo; — it&rsquo;s &ldquo;how fast can we bring a new domain into the stack.&rdquo; That&rsquo;s a different ceiling.
        </p>
      </>
    ),
  },
];

export function SectionFive() {
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
          Section 5
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
        Why this matters for whoever is asking
      </h2>

      <AudienceTabs tabs={tabs} initial="client" />
    </Reveal>
  );
}
