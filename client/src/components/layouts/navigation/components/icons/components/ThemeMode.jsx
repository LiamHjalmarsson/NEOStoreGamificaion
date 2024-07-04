import React, { useEffect, useState } from 'react';
import { checkDarkTheme } from '../../../../../../utils/darkTheme';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import Icon from '../Icon';

const ThemeMode = () => {
    let [isDarkMode, setIsDarkMode] = useState(checkDarkTheme());

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('darkTheme', true);
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('darkTheme', false);
        }
    }, [isDarkMode]);

    let darkModeHandler = (mode) => {
        setIsDarkMode(mode);
    }

    return (
        <>
            <Icon icon={<BsFillMoonFill />} onclick={() => darkModeHandler(true)} custom={`${!isDarkMode ? "delay-100" : "opacity-0 hidden"} `} />
            <Icon icon={<BsFillSunFill />} onclick={() => darkModeHandler(false)} custom={`${isDarkMode ? "delay-100" : "opacity-0 hidden"}`} />
        </>
    );
}

export default ThemeMode;
