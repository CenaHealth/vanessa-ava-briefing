type Props = {
  href: string;
  label: string;
  microcopy: string;
};

export function AvaInviteCta({ href, label, microcopy }: Props) {
  return (
    <div className="flex flex-col items-start gap-3">
      <div className="flex items-center gap-3">
        <img
          src={`${import.meta.env.BASE_URL}sphere-ava.png`}
          alt=""
          width={40}
          height={40}
          style={{ borderRadius: '9999px', objectFit: 'cover' }}
        />
        <a className="btn-primary" href={href}>
          {label}
        </a>
      </div>
      <div
        style={{
          fontSize: 'var(--text-body-04)',
          letterSpacing: 'var(--text-body-04--letter-spacing)',
          color: 'var(--color-text-muted)',
        }}
      >
        {microcopy}
      </div>
    </div>
  );
}
