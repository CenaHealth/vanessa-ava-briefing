import { MotifMark } from '../components/MotifMark';

export function Hero() {
  return (
    <section
      className="relative w-full"
      style={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background:
          'linear-gradient(135deg, var(--color-sand-50) 0%, var(--color-sand-50) 45%, rgba(124, 185, 173, 0.18) 100%)',
        padding: '120px 24px 72px',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 720, width: '100%' }}>
        <div className="mb-6">
          <MotifMark size={32} variant="hero" />
        </div>
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 400,
            fontSize: 'clamp(28px, 5vw, var(--text-display-02))',
            lineHeight: 1.12,
            letterSpacing: '-0.01em',
            color: 'var(--color-text-normal)',
            maxWidth: 600,
            margin: 0,
          }}
        >
          Cena Health runs the work — diagnoses, care plans, knowledge work — with agents in the lead. Humans are accountable for the result, not for producing it.
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--text-body-01)',
            lineHeight: 1.5,
            color: 'var(--color-text-muted)',
            maxWidth: 520,
            marginTop: 20,
          }}
        >
          This is not &ldquo;AI-assisted human work.&rdquo; It&rsquo;s the inverse. The agent reasons. The human signs off. That order matters.
        </p>
        <div
          className="scroll-cue"
          aria-hidden="true"
          style={{
            marginTop: 56,
            color: 'var(--color-text-faint)',
            fontSize: 18,
          }}
        >
          ▾
        </div>
      </div>
    </section>
  );
}
