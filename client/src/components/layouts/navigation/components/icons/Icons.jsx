import React from 'react';
import Icon from './Icon';
import { FaSearch } from "react-icons/fa";
import ThemeMode from './components/ThemeMode';
import ShoppingBasket from './components/ShoppingBasket';
import User from './components/User';

const Icons = ({ cartHandler, profileHandler, searchHandler }) => {
    return (
        <div className='flex gap-6 items-center justify-between transition duration-500 max-lg:order-3 max-lg:grow'>
            <div className='flex gap-6 grow max-lg:justify-end items-center'>
                <ThemeMode />

                <Icon icon={<FaSearch />} onclick={searchHandler} />

                <ShoppingBasket handelCart={cartHandler} />

                <User profileHandler={profileHandler} />
            </div>
        </div>
    );
}

export default Icons;
