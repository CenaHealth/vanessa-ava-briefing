import { MotifMark } from '../../components/MotifMark';

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
            maxWidth: 620,
            margin: 0,
          }}
        >
          Cena uses AI models the way a hospital uses electricity: critical, swappable, and not where the value lives. The knowledge, the memory, and the workflows belong to Cena.
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--text-body-01)',
            lineHeight: 1.5,
            color: 'var(--color-text-muted)',
            maxWidth: 540,
            marginTop: 20,
          }}
        >
          Said another way: we rent the AI model&rsquo;s reasoning. We own everything else.
        </p>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--text-body-02)',
            lineHeight: 1.55,
            color: 'var(--color-text-faint)',
            maxWidth: 540,
            marginTop: 14,
          }}
        >
          This isn&rsquo;t an opinion about today&rsquo;s AI vendors. It&rsquo;s an architectural choice that survives any of them changing their minds.
        </p>
        <div
          className="scroll-cue"
          aria-hidden="true"
          style={{ marginTop: 56 }}
        >
          <span
            className="material-symbols-outlined"
            style={{ color: 'var(--color-text-faint)', fontSize: 20 }}
          >
            keyboard_arrow_down
          </span>
        </div>
      </div>
    </section>
  );
}
