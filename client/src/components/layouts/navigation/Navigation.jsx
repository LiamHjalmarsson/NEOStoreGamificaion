import { NavLink, useLocation } from "react-router-dom";
import Icons from "./components/icons/Icons";
import Links from "./components/links/Links";
import { useEffect, useState } from "react";
import Cart from "./components/cart/Cart";
import Search from "./components/search/Search";
import Profile from "./components/profile/Profile";

const Navigation = () => {
    let { pathname } = useLocation();

    let [isCartOpen, setIsCartOpen] = useState(false);
    let [isSearchOpen, setIsSearchOpen] = useState(false);
    let [isProfileOpen, setIsProfileOpen] = useState(false);
    let [searchTerm, setSearchTerm] = useState([]);

    useEffect(() => {
        setIsProfileOpen(false);
        setIsCartOpen(false);
        setIsSearchOpen(false);
        setSearchTerm([]);
    }, [pathname]);

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
        <header className='transition-colors duration-500 fixed z-40 w-full h-32 bg-stone-200 text-stone-800 dark:bg-stone-800 dark:text-rose-500'>
            <nav className="flex relative items-center w-full h-full px-6 lg:px-12 justify-between">
                <NavLink to="/" className="text-4xl font-bold tracking-wider lg:w-72">
                    N-E-O
                </NavLink>

                <Links />

                <Icons
                    cartHandler={cartHandler}
                    searchHandler={searchHandler}
                    profileHandler={profileHandler}
                />

                <div className='relative z-20'>
                    <Search open={isSearchOpen} setSearch={setSearchTerm} searchValue={searchTerm} />
                    <Cart onClose={cartHandler} open={isCartOpen} />
                    <Profile open={isProfileOpen} />
                </div>
            </nav >
        </header >
    );
}


export default Navigation;
