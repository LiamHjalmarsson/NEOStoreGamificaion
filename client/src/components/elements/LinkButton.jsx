import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({ href, children, custom }) => {
    return (
        <Link
            to={href}
            className={`${custom ? custom : ""} py-2 px-8 border-2 border-stone-200 dark:border-indigo-500 text-center transition duration-500 hover:bg-stone-200 dark:hover:bg-indigo-500 hover:text-stone-800 font-bold`}
        >
            {children}
        </Link>
    );
}

export default LinkButton;
