import React, { useState } from 'react';
import { checkDarkTheme } from '../../../../../../utils/darkTheme';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import Icon from './Icon';

const ThemeMode = () => {
    let [isDarkMode, setIsDarkMode] = useState(checkDarkTheme());

    let darkModeHandler = () => {
        setIsDarkMode(!isDarkMode);

        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        localStorage.setItem('darkTheme', isDarkMode);
    }


    return (
        <>
            <Icon icon={<BsFillMoonFill />} onclick={darkModeHandler} custom={`${isDarkMode ? "delay-100" : "opacity-0 hidden"} `} />
            <Icon icon={<BsFillSunFill />} onclick={darkModeHandler} custom={`${!isDarkMode ? "delay-100" : "opacity-0 hidden"}`} />
        </>
    );
}

export default ThemeMode;
