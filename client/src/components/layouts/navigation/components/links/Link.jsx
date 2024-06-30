import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Link = ({ link }) => {
    let { pathname } = useLocation();
    let current = pathname.slice(1);

    return (
        <NavLink to={`/${link}`} className={`${current === link ? "border-t-2 border-b-2 border-stone-800 " : ""}  transition duration-500 uppercase font-bold text-base tracking-wider hover:border-b border-stone-800 py-4`}>
            {link}
        </NavLink>
    );
}

export default Link;
