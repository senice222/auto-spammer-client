import { useState, useLayoutEffect } from 'react';

export const useTheme = () => {
    const getPreferredTheme = () => {
        const storedTheme = localStorage.getItem('app-theme');
        if (storedTheme) {
            return storedTheme;
        }
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDarkScheme ? 'dark' : 'light';
    };

    const [theme, setTheme] = useState(getPreferredTheme);

    useLayoutEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('app-theme', theme);
    }, [theme]);

    useLayoutEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
            if (!localStorage.getItem('app-theme')) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        };

        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    return { theme, setTheme };
};
