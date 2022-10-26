import React, { useState } from 'react';
import useLocalStorage from 'use-local-storage';
import ThemeContext from './ThemeContext';

const ThemeState = (props) => {
    const [theme, setTheme] = useLocalStorage("theme", "light");
    const toggleTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeState;