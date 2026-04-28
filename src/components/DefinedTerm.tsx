import { useEffect, useId, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { glossary, type GlossaryId } from '../data/glossary';

type Props = {
  id: GlossaryId;
  children: ReactNode;
};

export function DefinedTerm({ id, children }: Props) {
  const entry = glossary[id];
  const [open, setOpen] = useState(false);
  const tooltipId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const tooltipRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.blur();
      }
    };
    const onPointerDown = (e: PointerEvent) => {
      const t = e.target as Node;
      if (triggerRef.current?.contains(t)) return;
      if (tooltipRef.current?.contains(t)) return;
      setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointerDown, true);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointerDown, true);
    };
  }, [open]);

  if (!entry) return <>{children}</>;

  return (
    <span style={{ position: 'relative', display: 'inline' }}>
      <button
        type="button"
        ref={triggerRef}
        aria-describedby={open ? tooltipId : undefined}
        aria-expanded={open}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={(e) => {
          const next = e.relatedTarget as Node | null;
          if (next && tooltipRef.current?.contains(next)) return;
          setOpen(false);
        }}
        onFocus={() => setOpen(true)}
        onBlur={(e) => {
          const next = e.relatedTarget as Node | null;
          if (next && tooltipRef.current?.contains(next)) return;
          setOpen(false);
        }}
        onClick={() => setOpen((v) => !v)}
        style={{
          background: 'none',
          border: 'none',
          padding: 0,
          margin: 0,
          font: 'inherit',
          color: 'inherit',
          cursor: 'help',
          textDecoration: 'underline dotted',
          textDecorationColor: 'var(--color-text-faint)',
          textUnderlineOffset: '0.18em',
          textDecorationThickness: '1px',
          display: 'inline',
        }}
      >
        {children}
      </button>
      {open && (
        <span
          ref={tooltipRef}
          id={tooltipId}
          role="tooltip"
          onMouseLeave={() => setOpen(false)}
          style={{
            position: 'absolute',
            bottom: 'calc(100% + 8px)',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 280,
            maxWidth: 'calc(100vw - 32px)',
            padding: '12px 14px',
            background: 'var(--color-surface-card)',
            border: '1px solid var(--color-border-default)',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-elevation-02)',
            zIndex: 50,
            textAlign: 'left',
            cursor: 'auto',
            whiteSpace: 'normal',
          }}
        >
          <span
            style={{
              display: 'block',
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--text-utility-overline)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 600,
              color: 'var(--color-text-faint)',
              marginBottom: 6,
            }}
          >
            Glossary
          </span>
          <span
            style={{
              display: 'block',
              fontFamily: 'var(--font-serif)',
              fontWeight: 600,
              fontSize: 'var(--text-heading-05)',
              color: 'var(--color-text-normal)',
              marginBottom: 4,
            }}
          >
            {entry.term}
          </span>
          <span
            style={{
              display: 'block',
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--text-body-03)',
              color: 'var(--color-text-muted)',
              lineHeight: 1.5,
            }}
          >
            {entry.definition}
          </span>
        </span>
      )}
    </span>
  );
}
