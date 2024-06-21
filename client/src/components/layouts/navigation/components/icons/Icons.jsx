import React, { useState } from 'react';
import Icon from './Icon';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { FaSearch } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import { checkDarkTheme } from '../../../../../utils/darkTheme';

const Icons = () => {
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
        <div className='flex gap-6'>
            <div className='relative px-4'>
                <Icon icon={<BsFillMoonFill />} onclick={darkModeHandler} custom={`${isDarkMode ? "delay-100" : "opacity-0"} absolute`} />
                <Icon icon={<BsFillSunFill />} onclick={darkModeHandler} custom={`${!isDarkMode ? "delay-100" : "opacity-0"} absolute`} />
            </div>
            < Icon icon={<FaSearch />} />
            < Icon icon={<MdShoppingCart />} />
            < Icon icon={<FaCircleUser />} />
        </div>
    );
}

export default Icons;
