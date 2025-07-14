import ProjectCard from "../components/cards/ProjectCard";

/* ------------------------------------------------------------------
   Dummy data for UI only.
   Replace later with an API/RTK Query hook that fetches /projects.
-------------------------------------------------------------------*/
const projects = [
  {
    id: 1,
    name: "ClientPoint Enterprise Solutions",
    role: "Frontend Engineer",
    year: 2023,
    stack: ["React", "TypeScript", "Redux Toolkit", "MUI"],
    url: "https://clientpoint.example.com",
  },
  {
    id: 2,
    name: "Peak IT – Consulting & PM",
    role: "Full-stack React Dev",
    year: 2024,
    stack: ["React", "Redux", "Context API", "GenAI APIs"],
    url: "https://peakit.example.com",
  },
  {
    id: 3,
    name: "TourO Bikes Mobility Platform",
    role: "Frontend Engineer",
    year: 2025,
    stack: ["React", "TypeScript", "Bootstrap"],
    url: "https://touro.example.com",
  },
];

export default function Projects() {
  return (
    <section className="space-y-6">
      <header className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Projects</h2>
        {/* slot for future filter/search controls */}
      </header>

      {/* grid */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((proj) => (
          <ProjectCard key={proj.id} {...proj} />
        ))}
      </div>
    </section>
  );
}
