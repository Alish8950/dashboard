import TimelineItem from '../components/cards/TimelineItem';

/* -----------------------------------------------------------------
   UI-only data.
   Swap for fetch('/experience') once your json-server is wired.
------------------------------------------------------------------ */
const experience = [
  {
    id: 1,
    company: 'Softobiz Technologies',
    role: 'Associate Software Engineer',
    location: 'Mohali, IN',
    start: '2022-07',
    end: null, // still employed
    responsibilities: [
      'Owned front-end delivery for multiple SaaS & mobility projects.',
      'Integrated REST APIs, implemented lazy-loading & memoisation.',
      'Collaborated in agile teams; performed code reviews.',
    ],
  },
  {
    id: 2,
    company: 'Freelance',
    role: 'Frontend Developer (React)',
    location: 'Remote',
    start: '2021-01',
    end: '2022-06',
    responsibilities: [
      'Built landing pages and dashboards for SME clients.',
      'Optimised Lighthouse scores to 90+ on all projects.',
    ],
  },
];

export default function Experience() {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-semibold">Experience</h2>

      {/* timeline column */}
      <div className="relative">
        {experience.map((item) => (
          <TimelineItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
