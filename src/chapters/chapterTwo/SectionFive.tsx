import { MotifMark } from '../../components/MotifMark';
import { Reveal } from '../../components/Reveal';
import { AudienceTabs, type AudienceTab } from '../../components/AudienceTabs';

const tabs: AudienceTab[] = [
  {
    key: 'client',
    label: "I'm a client",
    content: (
      <>
        <p>
          When you receive care that involves Cena&rsquo;s tools, the AI model the agent uses is invisible to you and replaceable to us. What stays the same: your record, the agent&rsquo;s reasoning trail on your case, and the clinical knowledge applied to your situation all live inside Cena&rsquo;s systems — not inside an AI vendor&rsquo;s platform.
        </p>
        <p>
          A concrete instance: if an AI vendor changes its data-handling policy tomorrow, the work an agent did on your case last week, and the case-specific memory it built up over months, are not caught up in that change. They are Cena&rsquo;s, on Cena infrastructure, and your provider sees the same record they saw before.
        </p>
      </>
    ),
  },
  {
    key: 'partner',
    label: "I'm a partner",
    content: (
      <>
        <p>
          Vendor independence means a Cena partnership doesn&rsquo;t carry hidden third-party operational risk. The workflows, the knowledge corpus, and the accountability records are Cena-owned and contractually allocated to the partnership. Your providers retain accountability for clinical decisions; Cena retains operational continuity across the AI vendors that sit underneath the work.
        </p>
        <p style={{ fontWeight: 600, color: 'var(--color-text-normal)' }}>
          If an AI vendor disrupts service, changes terms, or exits the market, that becomes an integration event for Cena to absorb — not a service outage you have to explain to your patients. The relationship you signed up for stays the relationship you have.
        </p>
      </>
    ),
  },
  {
    key: 'investor',
    label: "I'm an investor",
    content: (
      <>
        <p>Vendor independence is the unit-economics insurance policy.</p>
        <p>
          A clinical-services company built on a single AI vendor has its margins controlled by that vendor&rsquo;s pricing committee. Cena&rsquo;s architecture lets us route work to whichever vendor gives us the best price-per-task at any given time. The cost basis is competitive, not contractual.
        </p>
        <p style={{ fontWeight: 600, color: 'var(--color-text-normal)' }}>
          It&rsquo;s also a continuity story. The clinical knowledge, the case memory, and the workflow library are Cena&rsquo;s institutional assets — not licenses we&rsquo;d lose if we changed vendors. Cena&rsquo;s enterprise value is durable across the AI market&rsquo;s reshufflings, not contingent on them.
        </p>
      </>
    ),
  },
  {
    key: 'regulator',
    label: 'Regulator / Compliance',
    content: (
      <>
        <p>Vendor independence simplifies the compliance posture.</p>
        <p>
          Protected information, audit trails, and the records of what an agent did on each case live inside Cena infrastructure — covered by the enterprise data-handling agreement that spans all of Cena&rsquo;s hosted services — not inside an AI vendor&rsquo;s platform. When an AI vendor changes terms, Cena&rsquo;s stored regulated assets — patient records, audit trails, case memory — stay in Cena infrastructure and are not affected.
        </p>
        <p style={{ fontWeight: 600, color: 'var(--color-text-normal)' }}>
          If a regulator asks where patient data lives, who has access, and what happens to it when a vendor relationship ends, Cena answers with a single architecture diagram. The AI model is a contracted input. The regulated assets are Cena&rsquo;s, and they stay Cena&rsquo;s.
        </p>
      </>
    ),
  },
];

export function SectionFive() {
  return (
    <Reveal as="section" className="py-20">
      <div className="flex items-center gap-2 mb-4">
        <MotifMark />
        <span
          style={{
            fontSize: 'var(--text-utility-overline)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontWeight: 600,
            color: 'var(--color-text-faint)',
          }}
        >
          Section 5
        </span>
      </div>
      <h2
        className="mb-6"
        style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 500,
          fontSize: 'var(--text-heading-02)',
          lineHeight: 1.25,
          color: 'var(--color-text-normal)',
        }}
      >
        Why this matters for whoever is asking
      </h2>

      <AudienceTabs tabs={tabs} initial="client" />
    </Reveal>
  );
}
