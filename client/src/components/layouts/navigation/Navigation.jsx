import { NavLink, useLocation } from "react-router-dom";
import Icons from "./components/icons/Icons";
import Links from "./components/links/Links";
import { useEffect, useState } from "react";
import Cart from "./components/cart/Cart";
import Search from "./components/search/Search";
import Profile from "./components/profile/Profile";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";

const Navigation = () => {
    let { pathname } = useLocation();

    let [isCartOpen, setIsCartOpen] = useState(false);
    let [isSearchOpen, setIsSearchOpen] = useState(false);
    let [isProfileOpen, setIsProfileOpen] = useState(false);
    let [searchTerm, setSearchTerm] = useState([]);

    let [menu, setMenu] = useState(false);

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

    let menuHandler = () => {
        setMenu(!menu);
        setIsProfileOpen(false);
        setIsCartOpen(false);
        setIsSearchOpen(false);
    }

    return (
        <header className='transition-colors duration-500 fixed z-40 w-full h-32 bg-stone-200 text-stone-800 dark:bg-stone-800 dark:text-rose-600 shadow shadow-rose-600'>
            <nav className="flex relative items-center w-full h-full px-6 lg:px-12 justify-between">
                <NavLink to="/" className="text-4xl font-bold tracking-wider max-lg:hidden text-start sm:text-center z-10">
                    N-E-O
                </NavLink>

                <Links
                    open={menu}
                />

                <Icons
                    cartHandler={cartHandler}
                    searchHandler={searchHandler}
                    profileHandler={profileHandler}
                />

                <BurgerMenu menuHandler={menuHandler} open={menu} />

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
