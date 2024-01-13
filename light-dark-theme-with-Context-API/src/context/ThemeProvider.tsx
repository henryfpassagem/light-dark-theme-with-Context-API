import { useState } from "react";
import ThemeContext from "./ThemeContext";

type ThemeProviderProps = {
    children: React.ReactNode;
}

function ThemeProvider({children}: ThemeProviderProps) {
    const [pageTheme, setPageTheme] = useState<'dark' | 'light'>('light')

    function toggleTheme () {
      setPageTheme((prevPageTheme) => (
        prevPageTheme === 'dark' ? 'light' : 'dark'
      ));
    }

    return (
        <ThemeContext.Provider value = {{ theme: pageTheme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;