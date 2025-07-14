import { useDispatch, useSelector } from 'react-redux';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { toggleMode } from '../redux/themeSlice';

export default function ThemeToggle() {
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(toggleMode())}
      className="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
    </button>
  );
}
