type CenaItem = {
  title: string;
  detail: string;
};

const cenaItems: CenaItem[] = [
  {
    title: 'Knowledge layer (ava-brain)',
    detail: 'The corpus of clinical and operational knowledge Cena is building.',
  },
  {
    title: 'Memory layer',
    detail: 'What agents have learned about every case, workflow, and domain.',
  },
  {
    title: 'Tool interface',
    detail: 'Built on open standards (MCP) so any model can drive them.',
  },
  {
    title: 'Workflows',
    detail: 'The operating logic that decides which agent does what, and when a human reviews.',
  },
  {
    title: 'Accountability surface',
    detail: 'The human approval step and the audit trail behind every clinical decision.',
  },
];

/**
 * Section 3 ownership-division diagram for chapter 2. Communicates the
 * structural asymmetry: the AI vendor provides one piece (the model's
 * reasoning); Cena owns the five layers that compound. Implemented as
 * styled HTML rather than raw SVG paths so the labels reflow on narrow
 * viewports — the visual idiom is preserved by the box treatments.
 */
export function OwnershipDivision() {
  return (
    <div
      role="img"
      aria-label="Ownership division diagram. Cena owns five layers: knowledge layer, memory layer, tool interface, workflows, and the accountability surface. The AI vendor provides one piece: the model's reasoning."
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: 16,
        padding: 24,
        background: 'var(--color-surface-card)',
        border: '1px solid var(--color-border-default)',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-elevation-02)',
      }}
      className="ownership-grid"
    >
      {/* Cena-owned region */}
      <div
        style={{
          padding: '16px 16px 18px',
          background: 'rgba(82, 163, 149, 0.08)',
          border: '1.5px solid var(--color-teal-400)',
          borderRadius: 'var(--radius-sm)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 12,
          }}
        >
          <span
            aria-hidden="true"
            style={{
              width: 8,
              height: 8,
              borderRadius: 9999,
              background: 'var(--color-teal-700)',
              display: 'inline-block',
            }}
          />
          <span
            style={{
              fontSize: 'var(--text-utility-overline)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 600,
              color: 'var(--color-teal-800)',
              fontFamily: 'var(--font-sans)',
            }}
          >
            Cena owns
          </span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 8,
          }}
          className="cena-stack"
        >
          {cenaItems.map((item) => (
            <div
              key={item.title}
              style={{
                padding: '10px 12px',
                background: 'var(--color-surface-card)',
                border: '1px solid var(--color-border-default)',
                borderRadius: 'var(--radius-sm)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 600,
                  fontSize: 'var(--text-heading-05)',
                  color: 'var(--color-text-normal)',
                  marginBottom: 2,
                }}
              >
                {item.title}
              </div>
              <div
                style={{
                  fontSize: 'var(--text-body-04)',
                  letterSpacing: 'var(--text-body-04--letter-spacing)',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.45,
                }}
              >
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Connector */}
      <div
        aria-hidden="true"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          color: 'var(--color-text-faint)',
          fontSize: 'var(--text-utility-overline)',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          fontWeight: 600,
        }}
      >
        <span style={{ flex: 1, height: 1, background: 'var(--color-border-default)' }} />
        <span>plugs into</span>
        <span style={{ flex: 1, height: 1, background: 'var(--color-border-default)' }} />
      </div>

      {/* AI vendor region */}
      <div
        style={{
          padding: '14px 16px 16px',
          background: 'var(--color-sand-100)',
          border: '1.5px dashed var(--color-sand-400)',
          borderRadius: 'var(--radius-sm)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 8,
            gap: 8,
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              fontSize: 'var(--text-utility-overline)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 600,
              color: 'var(--color-text-muted)',
              fontFamily: 'var(--font-sans)',
            }}
          >
            AI vendor provides
          </span>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--text-body-04)',
              letterSpacing: 'var(--text-body-04--letter-spacing)',
              color: 'var(--color-text-faint)',
              fontStyle: 'italic',
            }}
          >
            swappable
          </span>
        </div>
        <div
          style={{
            padding: '10px 12px',
            background: 'var(--color-surface-card)',
            border: '1px dashed var(--color-sand-400)',
            borderRadius: 'var(--radius-sm)',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 600,
              fontSize: 'var(--text-heading-05)',
              color: 'var(--color-text-normal)',
              marginBottom: 2,
            }}
          >
            The model&rsquo;s reasoning
          </div>
          <div
            style={{
              fontSize: 'var(--text-body-04)',
              letterSpacing: 'var(--text-body-04--letter-spacing)',
              color: 'var(--color-text-muted)',
              lineHeight: 1.45,
            }}
          >
            The math the model does to read input and produce output. The choice is operational, not architectural.
          </div>
        </div>
      </div>
    </div>
  );
}
