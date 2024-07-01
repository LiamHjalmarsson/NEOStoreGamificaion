import React, { useState } from 'react';
import Icon from './Icon';
import { FaSearch } from "react-icons/fa";
import ThemeMode from './components/ThemeMode';
import ShoppingBasket from './components/ShoppingBasket';
import User from './components/User';

const Icons = ({ cartHandler, profileHandler, searchHandler }) => {
    return (
        <div className='flex gap-6 items-center justify-between transition duration-500 max-lg:order-1 max-sm:hidden'>
            <div className='flex gap-6 grow max-lg:hidden'>
                <ThemeMode />

                <Icon icon={<FaSearch />} onclick={searchHandler} />

                <ShoppingBasket handelCart={cartHandler} />
            </div>
            <User profileHandler={profileHandler} />
        </div>
    );
}

export default Icons;
