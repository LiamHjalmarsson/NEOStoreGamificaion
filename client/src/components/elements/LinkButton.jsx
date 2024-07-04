import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({ href, children, custom }) => {
    return (
        <Link
            to={href}
            className={`${custom ? custom : ""} py-2 px-8 border-2 flex-grow min-w-32 flex justify-center items-center text-rose-600 border-rose-600 text-center transition duration-500 hover:bg-rose-600 hover:text-stone-100 font-bold`}
        >
            {children}
        </Link>
    );
}

export default LinkButton;
