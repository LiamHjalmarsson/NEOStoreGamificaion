import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { firstLetter } from '../../../../utils/textTransformation';

const Link = ({ link }) => {
    let { pathname } = useLocation();
    let slicePath = pathname.slice(11);

    return (
        <li className="flex flex-col">
            <NavLink to={link.path} className={`p-4 font-bold cursor-pointer flex gap-2 items-center ${slicePath == link.path ? "text-rose-600 border-rose-400 dark:text-rose-500 dark:border-rose-500 border-r-4" : "border-r-4 dark:border-stone-800"} transition duration-300`}>
                {link.icon}
                <span className='grow'>
                    {firstLetter(link.path === "" ? "stats" : link.path)}
                </span>
            </NavLink>
        </li>
    );
}

export default Link;
