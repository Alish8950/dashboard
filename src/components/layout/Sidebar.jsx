import { NavLink } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/SpaceDashboard';
import BuildIcon from '@mui/icons-material/Build';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import MailIcon from '@mui/icons-material/Mail';

const links = [
  { to: '/', label: 'Overview', Icon: DashboardIcon },
  { to: '/projects', label: 'Projects', Icon: BuildIcon },
  { to: '/skills', label: 'Skills', Icon: SchoolIcon },
  { to: '/experience', label: 'Experience', Icon: WorkIcon },
  { to: '/contact', label: 'Contact', Icon: MailIcon },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex w-64 flex-col bg-white dark:bg-gray-800 border-r dark:border-gray-700">
      <div className="h-16 flex items-center justify-center text-xl font-bold">
        Portfolio
      </div>
      <nav className="flex-1 px-2 space-y-2">
        {links.map(({ to, label, Icon }) => (
          <NavLink
            key={to}
            to={to}
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium
              ${
                isActive
                  ? 'bg-indigo-100 dark:bg-gray-700 text-indigo-600'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`
            }
          >
            <Icon fontSize="small" />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
