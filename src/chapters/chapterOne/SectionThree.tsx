import { MotifMark } from '../../components/MotifMark';
import { Reveal } from '../../components/Reveal';

const pillars = [
  {
    title: 'Models capable of expert reasoning',
    body: 'Not text generation, but structured reasoning across clinical and operational logic in long, complex workflows.',
    icon: 'neurology',
  },
  {
    title: 'Memory that compounds',
    body: 'Agents can now retain and build on prior work in a way that makes them more useful over time, not reset with every conversation.',
    icon: 'database',
  },
  {
    title: 'Tooling that operates in real systems',
    body: 'Agents can use tools, call other agents, and run live in actual workflows. This is real workflow capability, not demo theater.',
    icon: 'build',
  },
];

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
        Why this only became possible recently
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
          Two years ago, language models could generate convincing text. They couldn&rsquo;t hold clinical logic across a complex case, use tools to act in real systems, or build on their own prior work. Those capabilities are new — and they arrived together, within a short window.
        </p>
        <p>
          Cena&rsquo;s bet is that we&rsquo;re now inside that window. Companies watching from the sideline, waiting for AI to &ldquo;mature enough,&rdquo; are making a timing decision they may not realize they&rsquo;re making. The window where an operating model gets defined doesn&rsquo;t stay open.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pillars.map((p) => (
          <div key={p.title} className="card p-4">
            <span
              className="material-symbols-outlined mb-3"
              aria-hidden="true"
              style={{ color: 'var(--color-teal-700)', fontSize: 28 }}
            >
              {p.icon}
            </span>
            <h3
              className="mb-2"
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 500,
                fontSize: 'var(--text-heading-04)',
                lineHeight: 1.35,
                color: 'var(--color-text-normal)',
              }}
            >
              {p.title}
            </h3>
            <p
              style={{
                fontSize: 'var(--text-body-03)',
                lineHeight: 1.5,
                color: 'var(--color-text-muted)',
              }}
            >
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
