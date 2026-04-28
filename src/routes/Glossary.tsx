import { useEffect } from 'react';
import { GlossarySection } from '../components/GlossarySection';

export function Glossary() {
  useEffect(() => {
    document.title = 'Cena Health — Briefing Glossary';
  }, []);

  return (
    <div className="mx-auto max-w-[1080px] px-6">
      <main style={{ maxWidth: 720, width: '100%', margin: '0 auto' }}>
        <GlossarySection />
      </main>
    </div>
  );
}
