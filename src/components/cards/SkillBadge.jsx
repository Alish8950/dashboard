/**
 * Pill-style badge for a single tech / tool.
 * Props:
 *  - label   : string
 *  - level   : 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert' (optional)
 *    Level is shown as a subtle label chip; omit if you don’t need it.
 */
export default function SkillBadge({ label, level }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-sm text-gray-700 dark:text-gray-200">
      {label}
      {level && (
        <span className="rounded-full bg-indigo-50 dark:bg-indigo-600/20 px-2 py-0.5 text-[10px] font-medium text-indigo-600 dark:text-indigo-300">
          {level}
        </span>
      )}
    </span>
  );
}
