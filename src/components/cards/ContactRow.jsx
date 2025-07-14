import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';

/**
 * A single contact-request row.
 * Props
 *  - name      : string
 *  - email     : string
 *  - message   : string  (short excerpt)
 *  - date      : string  (YYYY-MM-DD or locale)
 *  - status    : 'new' | 'read'
 */
export default function ContactRow({ name, email, message, date, status }) {
  const isNew = status === 'new';

  return (
    <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
      {/* status / icon */}
      <td className="px-4 py-3 text-center">
        {isNew ? (
          <MailOutlineIcon className="text-indigo-600" fontSize="small" />
        ) : (
          <MarkEmailReadIcon className="text-gray-400" fontSize="small" />
        )}
      </td>

      {/* name + email */}
      <td className="px-4 py-3">
        <p className="font-medium text-gray-900 dark:text-gray-100">{name}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">{email}</p>
      </td>

      {/* message excerpt */}
      <td className="px-4 py-3 hidden md:table-cell">
        <p className="truncate max-w-xs text-gray-600 dark:text-gray-300">{message}</p>
      </td>

      {/* date */}
      <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
        {date}
      </td>

      {/* badge */}
      <td className="px-4 py-3">
        {isNew && (
          <span className="rounded-full bg-indigo-50 dark:bg-indigo-600/20 px-2 py-0.5 text-xs font-medium text-indigo-600 dark:text-indigo-300">
            New
          </span>
        )}
      </td>
    </tr>
  );
}
