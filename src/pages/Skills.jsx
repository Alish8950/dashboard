import SkillBadge from "../components/cards/SkillBadge";

/* -----------------------------------------------------------
   UI-only data.
   Replace with fetch('/skills') when you hook up json-server.
------------------------------------------------------------ */
const skills = [
  // Languages
  { id: 1, category: "Languages", name: "JavaScript (ES6+)", level: "Expert" },
  { id: 2, category: "Languages", name: "TypeScript", level: "Advanced" },

  // Frameworks
  { id: 3, category: "Frameworks", name: "React.js", level: "Expert" },
  { id: 4, category: "Frameworks", name: "Redux Toolkit", level: "Advanced" },
  { id: 5, category: "Frameworks", name: "Context API", level: "Advanced" },

  // Styling
  { id: 6, category: "Styling", name: "Tailwind CSS", level: "Advanced" },
  { id: 7, category: "Styling", name: "Material-UI", level: "Advanced" },
  { id: 8, category: "Styling", name: "Bootstrap", level: "Intermediate" },

  // Tooling
  { id: 9, category: "Tooling", name: "Git & GitHub", level: "Advanced" },
  { id: 10, category: "Tooling", name: "Jira", level: "Intermediate" },

  // Testing
  { id: 11, category: "Testing", name: "Jest", level: "Intermediate" },

  // DevOps / OS
  {
    id: 12,
    category: "Dev Ops",
    name: "Linux / macOS / Windows",
    level: "Intermediate",
  },
];

/* Group by category so we can render neat sections */
const grouped = skills.reduce((acc, skill) => {
  acc[skill.category] = [...(acc[skill.category] || []), skill];
  return acc;
}, {});

export default function Skills() {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-semibold">Skills &amp; Tools</h2>

      {Object.entries(grouped).map(([category, list]) => (
        <div key={category} className="space-y-3">
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">
            {category}
          </h3>

          {/* responsive flex-wrap of badges */}
          <div className="flex flex-wrap gap-3">
            {list.map(({ id, name, level }) => (
              <SkillBadge key={id} label={name} level={level} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
