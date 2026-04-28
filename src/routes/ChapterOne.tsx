import { useEffect } from 'react';
import { Hero } from '../chapters/chapterOne/Hero';
import { SectionTwo } from '../chapters/chapterOne/SectionTwo';
import { SectionThree } from '../chapters/chapterOne/SectionThree';
import { SectionFour } from '../chapters/chapterOne/SectionFour';
import { SectionFive } from '../chapters/chapterOne/SectionFive';
import { SectionSix } from '../chapters/chapterOne/SectionSix';
import { SectionSeven } from '../chapters/chapterOne/SectionSeven';

export function ChapterOne() {
  useEffect(() => {
    document.title = 'Cena Health — Agents-First Thesis';
  }, []);

  return (
    <>
      <Hero />

      <div className="mx-auto max-w-[1080px] px-6">
        <main style={{ maxWidth: 720, width: '100%', margin: '0 auto' }}>
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <SectionFive />
          <SectionSix />
          <SectionSeven />
        </main>
      </div>
    </>
  );
}
