import { glossaryEntries } from '../data/glossary';

export function GlossarySection() {
  return (
    <section className="py-20">
      <div className="flex items-center gap-2 mb-4">
        <span
          style={{
            fontSize: 'var(--text-utility-overline)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontWeight: 600,
            color: 'var(--color-text-faint)',
          }}
        >
          Glossary
        </span>
      </div>
      <h1
        className="mb-6"
        style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 500,
          fontSize: 'var(--text-display-03)',
          lineHeight: 1.15,
          color: 'var(--color-text-normal)',
        }}
      >
        Vocabulary used in this briefing
      </h1>
      <p
        className="mb-10"
        style={{
          fontSize: 'var(--text-body-02)',
          lineHeight: 1.55,
          color: 'var(--color-text-muted)',
          maxWidth: 640,
        }}
      >
        Terms appear with a dotted underline throughout the briefing — hover, focus, or
        tap to see a short definition inline. The full list lives here.
      </p>

      <dl style={{ marginTop: 0 }}>
        {glossaryEntries.map((e, i) => (
          <div
            key={e.id}
            style={{
              padding: '20px 0',
              borderTop: i === 0 ? '1px solid var(--color-border-default)' : 'none',
              borderBottom: '1px solid var(--color-border-default)',
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr)',
              gap: 6,
            }}
          >
            <dt
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 600,
                fontSize: 'var(--text-heading-04)',
                color: 'var(--color-text-normal)',
              }}
            >
              {e.term}
            </dt>
            <dd
              style={{
                margin: 0,
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--text-body-02)',
                lineHeight: 1.55,
                color: 'var(--color-text-muted)',
              }}
            >
              {e.definition}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
