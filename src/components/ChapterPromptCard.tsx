type Props = {
  chapterNumber: string;
  title: string;
  question: string;
  hook: string;
};

export function ChapterPromptCard({ chapterNumber, title, question, hook }: Props) {
  return (
    <div className="card-grouped p-5">
      <div
        className="mb-2"
        style={{
          fontSize: 'var(--text-utility-overline)',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          fontWeight: 600,
          color: 'var(--color-text-faint)',
          fontFamily: 'var(--font-sans)',
        }}
      >
        {chapterNumber}
      </div>
      <h3
        className="mb-1"
        style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 500,
          fontSize: 'var(--text-heading-03)',
          lineHeight: 1.3,
          color: 'var(--color-text-normal)',
        }}
      >
        &ldquo;{question}&rdquo;
      </h3>
      <div
        className="mb-3"
        style={{
          fontSize: 'var(--text-body-03)',
          color: 'var(--color-text-muted)',
        }}
      >
        {title}
      </div>
      <div
        className="pl-3 border-l border-[color:var(--color-border-default)]"
        style={{
          fontSize: 'var(--text-body-03)',
          fontStyle: 'italic',
          color: 'var(--color-text-muted)',
          lineHeight: 1.5,
        }}
      >
        {hook}
      </div>
    </div>
  );
}
