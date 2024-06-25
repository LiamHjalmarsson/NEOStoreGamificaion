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
        <header className='relative'>
            <nav className="flex relative items-center w-full h-[10vh] p-12 justify-between transition-colors duration-300 bg-indigo-500 dark:bg-stone-800 text-stone-200">
                <NavLink to="/" className="text-5xl font-semibold tracking-wider">
                    N-E-O
                </NavLink>

                <Links />

                <Icons
                    cartHandler={cartHandler}
                    searchHandler={searchHandler}
                    profileHandler={profileHandler}
                />

                <div className='relative -top-0 z-20'>
                    <Cart onClose={cartHandler} open={isCartOpen} />
                    <Search open={isSearchOpen} setSearch={setSearchTerm} searchValue={searchTerm} />
                    <Profile open={isProfileOpen} />
                </div>
            </nav >
        </header >
    );
}


export default Navigation;
