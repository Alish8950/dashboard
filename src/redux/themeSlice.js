// themeSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Helper: Determine initial theme based on localStorage or system preference
const getInitialMode = () => {
  if (typeof window === 'undefined') return 'light'; // SSR safe fallback

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }

  // Respect system preference
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

// Helper: Apply theme to document and persist in localStorage
const applyTheme = (mode) => {
  const root = document.documentElement;
  if (mode === 'dark') {
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else if (mode === 'light') {
    root.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    // System preference
    localStorage.removeItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    root.classList.toggle('dark', prefersDark);
  }
};

const initialState = {
  mode: getInitialMode(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
      applyTheme(state.mode);
    },
    setMode: (state, action) => {
      state.mode = action.payload;
      applyTheme(state.mode);
    },
  },
});

export const { toggleMode, setMode } = themeSlice.actions;
export default themeSlice.reducer;
