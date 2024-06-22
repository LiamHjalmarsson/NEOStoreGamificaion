import React, { useContext, useState } from 'react';
import Icon from './Icon';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { FaSearch } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import { checkDarkTheme } from '../../../../../utils/darkTheme';
import { useCartContext } from '../../../../../context/cartContext';
import Cart from '../cart/Cart';

const Icons = () => {
    let [isDarkMode, setIsDarkMode] = useState(checkDarkTheme());
    let { cartItems } = useCartContext();
    let [isCartOpen, setIsCartOpen] = useState(false);

    let darkModeHandler = () => {
        setIsDarkMode(!isDarkMode);

        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        localStorage.setItem('darkTheme', isDarkMode);
    }

    let cartHandler = () => {
        setIsCartOpen(!isCartOpen);
    }

    return (
        <>
            <div className='flex gap-6'>
                <div className='relative px-4'>
                    <Icon icon={<BsFillMoonFill />} onclick={darkModeHandler} custom={`${isDarkMode ? "delay-100" : "opacity-0"} absolute`} />
                    <Icon icon={<BsFillSunFill />} onclick={darkModeHandler} custom={`${!isDarkMode ? "delay-100" : "opacity-0"} absolute`} />
                </div>
                < Icon icon={<FaSearch />} />
                <div className='relative'>
                    <div className={`${cartItems ? " visible" : "invisible"} duration-300 transition absolute text-sm font-bold rounded-full bg-green-500 px-2 -top-4 -right-4`}>
                        1
                    </div>
                    < Icon icon={<MdShoppingCart />} onclick={cartHandler} />
                </div>
                < Icon icon={<FaCircleUser />} />
            </div>

            <div className=' absolute'>
                <Cart onClose={cartHandler} open={isCartOpen} />
            </div>
        </>
    );
}

export default Icons;
