import React from 'react';
import { NavLink } from 'react-router-dom';
import { firstLetter } from '../../../../utils/textTransformation';

const Link = ({ link }) => {
    return (
        <li className="flex flex-col">
            <NavLink to={link.path} className='p-4 font-bold cursor-pointer'>
                {firstLetter(link.path === "" ? "stats" : link.path)}
            </NavLink>
            {
                link.children && link.children.map((child, index) => (
                    <NavLink to={child.path} className="py-2 px-8 font-bold" key={index}>
                        {child.path}
                    </NavLink>
                ))
            }
        </li>
    );
}

export default Link;
