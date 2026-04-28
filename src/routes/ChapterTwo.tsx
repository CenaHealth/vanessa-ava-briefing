import { useEffect } from 'react';
import { Hero } from '../chapters/chapterTwo/Hero';
import { SectionTwo } from '../chapters/chapterTwo/SectionTwo';
import { SectionThree } from '../chapters/chapterTwo/SectionThree';
import { SectionFour } from '../chapters/chapterTwo/SectionFour';
import { SectionFive } from '../chapters/chapterTwo/SectionFive';
import { SectionSix } from '../chapters/chapterTwo/SectionSix';
import { SectionSeven } from '../chapters/chapterTwo/SectionSeven';

export function ChapterTwo() {
  useEffect(() => {
    document.title = 'Cena Health — Vendor Independence';
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
