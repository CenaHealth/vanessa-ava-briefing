import { MotifMark } from '../../components/MotifMark';
import { ComparisonBlock } from '../../components/ComparisonBlock';
import { Reveal } from '../../components/Reveal';

const rows = [
  {
    left: "Build the product on the vendor's proprietary surfaces.",
    right: "Build on portable surfaces; the vendor only provides the model's reasoning.",
  },
  {
    left: "Memory, tools, and workflows live inside the vendor's platform.",
    right: 'Memory, tools, and workflows live in Cena-owned storage.',
  },
  {
    left: 'A vendor pricing or policy change reshapes the business.',
    right: 'A vendor change is an integration update, not a re-platforming.',
  },
];

export function SectionTwo() {
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
        Why this question is fair
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
          The wrapper question — &ldquo;aren&rsquo;t you just a thin layer on top of someone else&rsquo;s AI?&rdquo; — is fair because the wrapper pattern is real. A large share of the AI products built in the last eighteen months are exactly that: a layer of UX, a system prompt, and some stored data sitting on top of a vendor&rsquo;s model. Investors and prospects have learned to ask because they&rsquo;ve watched companies present as AI-native and turn out to have nothing underneath that survives a vendor pivot.
        </p>
        <p>
          That pattern is the median, not a strawman. Companies are putting the things that should be theirs — memory, tool connections, workflows, even the deployment format — inside a vendor&rsquo;s platform. When the vendor changes pricing, deprecates a feature, or rewrites the rules of the platform, those products lose their floor.
        </p>
        <p>
          Cena is built on the inverse stance. The model — the AI&rsquo;s reasoning — is the only piece we treat as replaceable. Everything else lives inside Cena and stays portable.
        </p>
      </div>

      <ComparisonBlock
        leftLabel="The wrapper trap"
        rightLabel="Cena's stance"
        rows={rows}
      />
    </Reveal>
  );
}
