import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({ href, children, custom }) => {
    return (
        <Link
            to={href}
            className={`${custom ? custom : ""}
            p-2 border-green-500 border-2 px-8 py-4 text-center font-semibold uppercase 
            hover:bg-green-500 hover:text-stone-200 text-green-500 transition-colors duration-300`}
        >
            {children}
        </Link>
    );
}

export default LinkButton;
