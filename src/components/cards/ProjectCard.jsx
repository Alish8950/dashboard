import LaunchIcon from "@mui/icons-material/Launch";
import BuildIcon from "@mui/icons-material/Build";

/**
 * UI-only card for a single project.
 * Props:
 *  - name        : string
 *  - role        : string
 *  - year        : number | string
 *  - stack       : string[]          (max 3–4 chips shown; rest collapse)
 *  - url         : string (optional) opens in new tab
 */
export default function ProjectCard({ name, role, year, stack = [], url }) {
  const previewChips = stack.slice(0, 4);

  return (
    <div className="flex flex-col justify-between p-5 bg-white dark:bg-gray-800 rounded-lg shadow group">
      {/* header */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {name}
          </h3>
          <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
            {role} · {year}
          </p>
        </div>

        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 dark:bg-gray-700">
          <BuildIcon fontSize="small" className="text-indigo-600" />
        </span>
      </div>

      {/* tech chips */}
      <div className="mt-4 flex flex-wrap gap-2">
        {previewChips.map((tech) => (
          <span
            key={tech}
            className="rounded bg-gray-100 dark:bg-gray-700 px-2 py-1 text-xs text-gray-600 dark:text-gray-300"
          >
            {tech}
          </span>
        ))}
        {stack.length > previewChips.length && (
          <span className="rounded bg-gray-100 dark:bg-gray-700 px-2 py-1 text-xs text-gray-600 dark:text-gray-300">
            +{stack.length - previewChips.length} more
          </span>
        )}
      </div>

      {/* footer */}
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:underline"
        >
          Visit&nbsp;site <LaunchIcon fontSize="inherit" />
        </a>
      )}
    </div>
  );
}
