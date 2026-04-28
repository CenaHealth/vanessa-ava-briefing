import { useState } from 'react';

export type GlossaryEntry = { term: string; definition: string };

type Props = { entries: GlossaryEntry[] };

function GlossaryEntryRow({ entry, isLast }: { entry: GlossaryEntry; isLast: boolean }) {
  return (
    <div className={`py-3 ${isLast ? '' : 'border-b border-[color:var(--color-border-default)]'}`}>
      <div
        style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 600,
          fontSize: 'var(--text-heading-05)',
          color: 'var(--color-text-normal)',
          marginBottom: 4,
        }}
      >
        {entry.term}
      </div>
      <div
        style={{
          fontSize: 'var(--text-body-03)',
          color: 'var(--color-text-muted)',
          lineHeight: 1.5,
        }}
      >
        {entry.definition}
      </div>
    </div>
  );
}

export function GlossarySidebarDesktop({ entries }: Props) {
  return (
    <aside
      className="hidden xl:block"
      style={{
        position: 'sticky',
        top: 96,
        alignSelf: 'flex-start',
        width: 280,
        marginLeft: 32,
        // Top padding intentionally matches the section's `py-20` (80px) so
        // the GLOSSARY overline lines up with each section's overline marker.
        padding: '80px 20px 20px 24px',
        borderLeft: '1px solid var(--color-border-default)',
        background: 'var(--color-surface-pane)',
        borderTopLeftRadius: 'var(--radius-md)',
        borderBottomLeftRadius: 'var(--radius-md)',
        backdropFilter: 'blur(2px)',
      }}
    >
      <div
        style={{
          fontSize: 'var(--text-utility-overline)',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          fontWeight: 600,
          color: 'var(--color-text-faint)',
          marginBottom: 12,
        }}
      >
        Glossary
      </div>
      {entries.map((e, i) => (
        <GlossaryEntryRow key={e.term} entry={e} isLast={i === entries.length - 1} />
      ))}
    </aside>
  );
}

export function GlossarySidebarMobile({ entries }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <details
      className="xl:hidden mx-auto max-w-[720px] px-6 mb-12"
      open={open}
      onToggle={(e) => setOpen((e.currentTarget as HTMLDetailsElement).open)}
    >
      <summary
        style={{
          listStyle: 'none',
          cursor: 'pointer',
          padding: '14px 18px',
          background: 'var(--color-surface-card-grouped)',
          border: '1px solid var(--color-border-default)',
          borderRadius: 'var(--radius-md)',
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--text-body-02)',
          color: 'var(--color-text-normal)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span>Glossary</span>
        <span
          className="material-symbols-outlined"
          aria-hidden="true"
          style={{
            transition: 'transform 200ms ease',
            transform: open ? 'rotate(180deg)' : 'rotate(0)',
            color: 'var(--color-text-faint)',
            fontSize: 20,
          }}
        >
          keyboard_arrow_down
        </span>
      </summary>
      <div
        style={{
          padding: '8px 18px 4px',
          background: 'var(--color-surface-card)',
          border: '1px solid var(--color-border-default)',
          borderTop: 'none',
          borderRadius: '0 0 var(--radius-md) var(--radius-md)',
          marginTop: -1,
        }}
      >
        {entries.map((e, i) => (
          <GlossaryEntryRow key={e.term} entry={e} isLast={i === entries.length - 1} />
        ))}
      </div>
    </details>
  );
}
