import { MotifMark } from '../../components/MotifMark';
import { Reveal } from '../../components/Reveal';
import { OwnershipDivision } from '../../components/OwnershipDivision';

export function SectionThree() {
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
          Section 3
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
        What we own, what we rent
      </h2>

      <div
        className="space-y-5 mb-8"
        style={{
          fontSize: 'var(--text-body-02)',
          lineHeight: 1.55,
          color: 'var(--color-text-normal)',
        }}
      >
        <p>
          Cena owns the parts of the system that compound over time and that walk with us if we change AI vendors. The AI vendor provides the model — the part that reads, reasons, and writes. That&rsquo;s it. The asymmetry is the point: the wrapper framing implies the vendor side is the substance; the actual division shows it isn&rsquo;t.
        </p>
      </div>

      <OwnershipDivision />

      <p
        className="prose-callout my-8"
        style={{ fontSize: 'var(--text-body-02)', lineHeight: 1.5 }}
      >
        The model&rsquo;s reasoning is a commodity. We treat it like one. Everything else compounds inside Cena and walks with us if we change vendors.
      </p>
    </Reveal>
  );
}
