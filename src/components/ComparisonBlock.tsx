import { Fragment } from 'react';

type Row = { left: string; right: string };
type Props = {
  leftLabel: string;
  rightLabel: string;
  rows: Row[];
};

const headerStyle = {
  fontSize: 'var(--text-utility-overline)',
  letterSpacing: '0.18em',
  textTransform: 'uppercase' as const,
  fontWeight: 600,
  color: 'var(--color-text-muted)',
  fontFamily: 'var(--font-sans)',
};

const cellStyle = {
  fontSize: 'var(--text-body-02)',
  lineHeight: 1.5,
  color: 'var(--color-text-normal)',
};

const leftBg = 'var(--color-sand-100)';
const rightBg = 'rgba(82, 163, 149, 0.06)';

/**
 * Two-column comparison card with paired-row alignment. Renders as a row-major
 * grid (header-left, header-right, row1-left, row1-right, …) so each grid row
 * shares its height across both columns. On mobile (<md) the same flat order
 * stacks into a single column, producing trap/Cena pair reading.
 */
export function ComparisonBlock({ leftLabel, rightLabel, rows }: Props) {
  return (
    <div
      className="card overflow-hidden"
      style={{ borderRadius: 'var(--radius-md)' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Headers */}
        <div
          className="px-5 py-3 border-b border-[color:var(--color-border-default)] md:border-r"
          style={{ ...headerStyle, background: leftBg }}
        >
          {leftLabel}
        </div>
        <div
          className="px-5 py-3 border-b border-[color:var(--color-border-default)]"
          style={{ ...headerStyle, background: rightBg }}
        >
          {rightLabel}
        </div>

        {/* Paired rows */}
        {rows.map((r, i) => {
          const isLast = i === rows.length - 1;
          return (
            <Fragment key={i}>
              <div
                className={`px-5 py-4 ${isLast ? '' : 'border-b'} border-[color:var(--color-border-default)] md:border-r`}
                style={{ ...cellStyle, background: leftBg }}
              >
                {r.left}
              </div>
              <div
                className={`px-5 py-4 ${isLast ? '' : 'border-b'} border-[color:var(--color-border-default)]`}
                style={{ ...cellStyle, background: rightBg }}
              >
                {r.right}
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
