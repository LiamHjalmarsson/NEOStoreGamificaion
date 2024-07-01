import React, { useState } from 'react';
import Icon from './Icon';
import { FaSearch } from "react-icons/fa";
import ThemeMode from './components/ThemeMode';
import ShoppingBasket from './components/ShoppingBasket';
import User from './components/User';

const Icons = ({ cartHandler, profileHandler, searchHandler }) => {
    return (
        <div className='flex gap-6 items-center justify-between transition duration-500 max-lg:flex-row-reverse max-lg:order-1 max-lg:grow'>
            <div className='flex gap-6 grow '>
                <ThemeMode />

                <Icon icon={<FaSearch />} onclick={searchHandler} />

                <ShoppingBasket handelCart={cartHandler} />
            </div>
            <User profileHandler={profileHandler} />
        </div>
    );
}

export default Icons;
