import React from 'react';
import { Link } from 'react-router-dom';

const Copyright = () => {
    return (
        <span className="block text-sm text-stone-800 sm:text-center dark:text-stone-200">
            © 2024
            <Link to="/" class="hover:underline">
                N-E-O
            </Link>
            . All Rights Reserved.
        </span>
    );
}

export default Copyright;
