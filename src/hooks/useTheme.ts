import { useState, useEffect } from 'react';

const useTheme = (initial: null) => {
  const [darkTheme, setDarkTheme] = useState<boolean | null>(initial);

  useEffect(() => {
    // initial render state
    if (darkTheme === null) {
      const localTheme = localStorage.getItem('theme');
      if (localTheme) {
        setDarkTheme(localTheme === 'dark' ? true : false);
      } else {
        const prefersDark = '(prefers-color-scheme: dark)';
        const isSysDark = window.matchMedia(prefersDark).matches;
        setDarkTheme(isSysDark);
      }
    }

    // user override - subsequent renders
    if (darkTheme === true) {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
      return;
    }

    if (darkTheme === false) {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
    }
  }, [darkTheme]);

  return [darkTheme, setDarkTheme];
};

export default useTheme;
