import React from 'react';
import { Link } from 'react-router-dom';
import { useRootContext } from '../../../../pages/Root';

let links = ["N-E-O", "Categories", "Products"];

const Links = () => {
    let { user } = useRootContext();

    return (
        <div className="sm:flex sm:items-center sm:justify-between">
            <ul className="flex justify-between w-1/2 mx-auto items-center mb-6 text-sm uppercase font-medium text-stone-800 sm:mb-0 dark:text-stone-200">
                {links.map(link => (
                    <li key={link}>
                        <Link to={`/${link.toLowerCase()}`} className="hover:underline">{link}</Link>
                    </li>
                ))}

                {user.role === "admin" && <Link to="/" className="hover:underline"> Dashboard</Link>}
            </ul>
        </div>
    );
}

export default Links;
