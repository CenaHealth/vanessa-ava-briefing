import { useState, type ReactNode } from 'react';

export type AudienceTab = {
  key: string;
  label: string;
  content: ReactNode;
};

type Props = {
  tabs: AudienceTab[];
  initial?: string;
  ariaLabel?: string;
};

export function AudienceTabs({ tabs, initial, ariaLabel }: Props) {
  const [active, setActive] = useState<string>(initial ?? tabs[0]?.key ?? '');
  const activeTab = tabs.find((t) => t.key === active) ?? tabs[0];

  return (
    <div
      className="card"
      style={{
        padding: 0,
        overflow: 'hidden',
        boxShadow: 'var(--shadow-elevation-02)',
      }}
    >
      <div
        role="tablist"
        aria-label={ariaLabel ?? 'Audience perspectives'}
        className="flex gap-1 px-2 pt-1 overflow-x-auto"
        style={{
          borderBottom: '1px solid var(--color-border-default)',
          overflowY: 'hidden',
          scrollbarWidth: 'none',
        }}
      >
        {tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            aria-selected={active === t.key}
            data-state={active === t.key ? 'active' : 'inactive'}
            className="tab-trigger"
            onClick={() => setActive(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="p-6">
        <div
          className="space-y-4"
          style={{
            fontSize: 'var(--text-body-02)',
            lineHeight: 1.6,
            color: 'var(--color-text-muted)',
          }}
        >
          {activeTab?.content}
        </div>
      </div>
    </div>
  );
}
