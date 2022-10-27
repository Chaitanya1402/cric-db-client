import { useLocation } from 'react-router-dom';
import { useContext, useLayoutEffect, useEffect } from 'react';
import ThemeContext from '../contexts/ThemeContext';

const Wrapper = ({ children }) => {
    const location = useLocation();
    const themeInfo = useContext(ThemeContext);
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        document.body.style.transition = "all 0.3s linear";
        if (themeInfo.theme === "light") {
            document.body.style.backgroundColor = "#fff";
        }
        else {
            document.body.style.backgroundColor = "#18181b";
        }
    }, [themeInfo.theme])
    return children
}

export default Wrapper;