import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Link = ({ link }) => {
    let { pathname } = useLocation();

    return (
        <NavLink to={`/${link}`} className={`${pathname.slice(1) === link ? "border-t border-b" : ""} uppercase font-bold text-base tracking-wider hover:border-b border-stone-800 dark:border-stone-200 py-4`}>
            {link}
        </NavLink>
    );
}

export default Link;
