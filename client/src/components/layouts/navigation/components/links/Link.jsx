import React from 'react';
import { NavLink } from 'react-router-dom';

const Link = ({ link }) => {
    return (
        <NavLink to={`/${link}`} className={`uppercase font-bold text-base tracking-wider`}>
            {link}
        </NavLink>
    );
}

export default Link;
