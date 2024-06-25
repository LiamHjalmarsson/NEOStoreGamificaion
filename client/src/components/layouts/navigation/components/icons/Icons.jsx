import React, { useState } from 'react';
import Icon from './components/Icon';
import { FaSearch } from "react-icons/fa";
import Cart from '../cart/Cart';
import Search from '../search/Search';
import Profile from '../profile/Profile';
import ThemeMode from './components/ThemeMode';
import ShoppingBasket from './components/ShoppingBasket';
import User from './components/User';

const Icons = () => {
    let [isCartOpen, setIsCartOpen] = useState(false);
    let [isSearchOpen, setIsSearchOpen] = useState(false);
    let [isProfileOpen, setIsProfileOpen] = useState(false);

    let cartHandler = () => {
        setIsSearchOpen(false);
        setIsProfileOpen(false);
        setIsCartOpen(!isCartOpen);
    }

    let searchHandler = () => {
        setIsProfileOpen(false);
        setIsCartOpen(false);
        setIsSearchOpen(!isSearchOpen);
    }

    let profileHandler = () => {
        setIsSearchOpen(false);
        setIsCartOpen(false);
        setIsProfileOpen(!isProfileOpen);
    }

    return (
        <>
            <div className='flex gap-6 items-center'>
                <ThemeMode />

                <Icon icon={<FaSearch />} onclick={searchHandler} />

                <ShoppingBasket handelCart={cartHandler} />

                <User profileHandler={profileHandler} />
            </div>

            <div className='relative -top-0 z-20'>
                <Cart onClose={cartHandler} open={isCartOpen} />
                <Search open={isSearchOpen} onClose={searchHandler} />
                <Profile open={isProfileOpen} />
            </div>
        </>
    );
}

export default Icons;
