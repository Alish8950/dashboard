/**
 * Vertical-timeline item.
 * Props:
 *  - company          : string
 *  - role             : string
 *  - location         : string
 *  - start            : string (YYYY-MM)
 *  - end              : string | null   (null = “Present”)
 *  - responsibilities : string[]        (bullet points, optional)
 */
export default function TimelineItem({
  company,
  role,
  location,
  start,
  end,
  responsibilities = [],
}) {
  /* Make "start – end" string */
  const dateRange = `${start} – ${end ?? 'Present'}`;

  return (
    <div className="relative pl-8 sm:pl-12">
      {/* vertical line */}
      <span className="absolute left-3 top-0 h-full w-px bg-gray-300 dark:bg-gray-700" />

      {/* dot */}
      <span className="absolute left-[6px] top-2 h-3 w-3 rounded-full bg-indigo-600" />

      <div className="mb-8 rounded-lg bg-white dark:bg-gray-800 p-5 shadow">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {role}
        </h3>
        <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
          {company} · {location}
        </p>
        <p className="mt-0.5 text-xs text-gray-400">{dateRange}</p>

        {responsibilities.length > 0 && (
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700 dark:text-gray-200">
            {responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
