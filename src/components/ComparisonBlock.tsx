import { useEffect, useRef, useState } from 'react';

type Row = { left: string; right: string };
type Props = {
  leftLabel: string;
  rightLabel: string;
  rows: Row[];
};

/**
 * Two-column comparison card with sequential reveal: left column → right
 * column 300ms later → rows within each column stagger 80ms. Per visual-
 * treatment-direction §Section 2.
 */
export function ComparisonBlock({ leftLabel, rightLabel, rows }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [leftIn, setLeftIn] = useState(false);
  const [rightIn, setRightIn] = useState(false);
  const [rowIn, setRowIn] = useState<boolean[]>(() => rows.map(() => false));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const timeouts: number[] = [];
    let fired = false;
    const trigger = () => {
      if (fired) return;
      fired = true;
      timeouts.push(window.setTimeout(() => setLeftIn(true), 0));
      rows.forEach((_, i) => {
        timeouts.push(window.setTimeout(() => {
          setRowIn((prev) => prev.map((v, idx) => (idx === i ? true : v)));
        }, 120 + i * 80));
      });
      timeouts.push(window.setTimeout(() => setRightIn(true), 300));
    };
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            trigger();
            obs.disconnect();
          }
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    // Fallback: if observer hasn't fired in 1.5s (e.g., element is already in
    // viewport at load and observer timing is unreliable), reveal anyway.
    const fallback = window.setTimeout(trigger, 1500);
    timeouts.push(fallback);
    return () => {
      timeouts.forEach(window.clearTimeout);
      obs.disconnect();
    };
  }, [rows]);

  return (
    <div
      ref={ref}
      className="card overflow-hidden"
      style={{ borderRadius: 'var(--radius-md)' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[color:var(--color-border-default)]">
        {/* Left column */}
        <div
          className="cmp-col bg-[color:var(--color-sand-100)]"
          data-visible={leftIn || undefined}
        >
          <div
            className="px-5 py-3 border-b border-[color:var(--color-border-default)]"
            style={{
              fontSize: 'var(--text-utility-overline)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 600,
              color: 'var(--color-text-muted)',
              fontFamily: 'var(--font-sans)',
            }}
          >
            {leftLabel}
          </div>
          {rows.map((r, i) => (
            <div
              key={`l${i}`}
              className="cmp-row px-5 py-4 border-b last:border-b-0 border-[color:var(--color-border-default)]"
              data-visible={rowIn[i] || undefined}
              style={{
                fontSize: 'var(--text-body-02)',
                lineHeight: 1.5,
                color: 'var(--color-text-normal)',
              }}
            >
              {r.left}
            </div>
          ))}
        </div>

        {/* Right column */}
        <div
          className="cmp-col"
          data-visible={rightIn || undefined}
          style={{ background: 'rgba(82, 163, 149, 0.06)' }}
        >
          <div
            className="px-5 py-3 border-b border-[color:var(--color-border-default)]"
            style={{
              fontSize: 'var(--text-utility-overline)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 600,
              color: 'var(--color-text-muted)',
              fontFamily: 'var(--font-sans)',
            }}
          >
            {rightLabel}
          </div>
          {rows.map((r, i) => (
            <div
              key={`r${i}`}
              className="cmp-row px-5 py-4 border-b last:border-b-0 border-[color:var(--color-border-default)]"
              data-visible={rowIn[i] || undefined}
              style={{
                fontSize: 'var(--text-body-02)',
                lineHeight: 1.5,
                color: 'var(--color-text-normal)',
              }}
            >
              {r.right}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
