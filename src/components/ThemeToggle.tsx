'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full glass-panel hover:bg-white/10 dark:hover:bg-black/10 transition-colors border border-primary/30 flex items-center justify-center w-10 h-10 relative overflow-hidden group"
      aria-label="Toggle Dark Mode"
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <Sun 
          className="absolute h-full w-full inset-0 transition-all duration-300 dark:rotate-90 dark:opacity-0 dark:scale-0 rotate-0 opacity-100 scale-100 text-yellow-500" 
        />
        <Moon 
          className="absolute h-full w-full inset-0 transition-all duration-300 dark:rotate-0 dark:opacity-100 dark:scale-100 -rotate-90 opacity-0 scale-0 text-primary" 
        />
      </div>
      <div className="absolute inset-0 bg-primary/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out z-[-1]" />
    </button>
  );
}
