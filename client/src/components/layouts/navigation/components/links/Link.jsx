import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Link = ({ link }) => {
    let { pathname } = useLocation();
    let current = pathname.slice(1);

    let style = `transition duration-500 uppercase font-semibold text-base tracking-wider hover:border-b-2 border-stone-500 hover:dark:border-rose-600 py-4`;

    return (
        <NavLink to={`/${link}`} className={`${style} ${current === link ? "border-t-2 border-b-2" : ""}`}>
            {link}
        </NavLink>
    );
}

export default Link;
