import { Link } from 'react-router-dom';

export type CardState = 'shipped' | 'next' | 'queued' | 'current';

type Props = {
  chapterNumber: string;
  title: string;
  question: string;
  hook: string;
  state?: CardState;
  to?: string;
};

const stateLabels: Record<CardState, string> = {
  shipped: 'Shipped',
  next: 'Up next',
  queued: 'Queued',
  current: 'You are here',
};

function StateBadge({ state }: { state: CardState }) {
  const isLive = state === 'shipped';
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 'var(--text-utility-overline)',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        fontWeight: 600,
        color: isLive ? 'var(--color-teal-700)' : 'var(--color-text-faint)',
      }}
    >
      {isLive && (
        <span
          aria-hidden="true"
          style={{
            width: 6,
            height: 6,
            borderRadius: 9999,
            background: 'var(--color-teal-700)',
            display: 'inline-block',
          }}
        />
      )}
      {stateLabels[state]}
    </span>
  );
}

function CardBody({ chapterNumber, title, question, hook, state }: Required<Pick<Props, 'chapterNumber' | 'title' | 'question' | 'hook'>> & { state: CardState }) {
  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <div
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
        <StateBadge state={state} />
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
    </>
  );
}

export function ChapterPromptCard({
  chapterNumber,
  title,
  question,
  hook,
  state = 'queued',
  to,
}: Props) {
  const body = (
    <CardBody
      chapterNumber={chapterNumber}
      title={title}
      question={question}
      hook={hook}
      state={state}
    />
  );

  if (to && state !== 'current') {
    return (
      <Link
        to={to}
        className="card-grouped p-5 prompt-card-link"
        style={{ textDecoration: 'none', display: 'block' }}
      >
        {body}
      </Link>
    );
  }

  return <div className="card-grouped p-5">{body}</div>;
}
