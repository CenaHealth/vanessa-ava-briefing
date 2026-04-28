type Props = {
  size?: number;
  variant?: 'hero' | 'section';
  className?: string;
};

/**
 * Abstract glyph derived from Ava's bubble-sculpture form (sphere-ava). Two
 * concentric soft-edged rings with a small inner dot — reads as "agent at
 * work" without being a literal bot or brain.
 */
export function MotifMark({ size = 16, variant = 'section', className }: Props) {
  const fill = variant === 'hero' ? 'var(--color-teal-800)' : 'var(--color-teal-700)';
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="presentation"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="12" r="10" fill={fill} opacity="0.18" />
      <circle cx="12" cy="12" r="6" fill={fill} opacity="0.55" />
      <circle cx="12" cy="12" r="2.25" fill={fill} />
    </svg>
  );
}
