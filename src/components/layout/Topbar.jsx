import MenuIcon from '@mui/icons-material/Menu';
import ThemeToggle from '../ThemeToggle';

export default function Topbar() {
  return (
    <header className="h-16 flex items-center justify-between px-4 bg-white dark:bg-gray-800 shadow md:pl-72">
      {/* mobile menu button placeholder */}
      <button className="md:hidden">
        <MenuIcon />
      </button>
      <h1 className="text-lg font-semibold">Dashboard</h1>
      <ThemeToggle />
    </header>
  );
}
