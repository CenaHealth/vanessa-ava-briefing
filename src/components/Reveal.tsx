import { useEffect, useRef, useState, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'span';
  rootMargin?: string;
};

export function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
  rootMargin = '0px 0px -10% 0px',
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (delay > 0) {
              const t = window.setTimeout(() => setVisible(true), delay);
              return () => window.clearTimeout(t);
            }
            setVisible(true);
            obs.disconnect();
          }
        }
      },
      { rootMargin, threshold: 0.05 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay, rootMargin]);

  return (
    <Tag
      ref={ref as never}
      className={`fade-in ${className}`}
      data-visible={visible || undefined}
    >
      {children}
    </Tag>
  );
}
