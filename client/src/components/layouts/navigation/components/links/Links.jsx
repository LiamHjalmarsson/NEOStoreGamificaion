import React from 'react';
import Link from './Link';
import { NavLink } from "react-router-dom";
import { useRootContext } from '../../../../../pages/Root';

const links = ["categories", "products"];

const Links = ({ open }) => {
    let { user } = useRootContext();

    return (
        <>
            <ul className='grow hidden lg:flex justify-center items-center gap-12'>
                {
                    links.map((link, index) => (
                        <li key={index}>
                            <Link link={link} />
                        </li>
                    ))
                }

                {user && user.role === "admin" && (
                    <li>
                        <Link link="dashboard" />
                    </li>
                )}
            </ul>

            <div className={`${open ? "translate-x-0" : " translate-x-full"} fixed top-0 w-full left-0 h-screen right-0 bg-stone-200 dark:bg-stone-800 z-10 lg:hidden transition duration-500 transform`}>
                <ul className='h-full flex flex-col items-center gap-12 py-32'>
                    <NavLink to="/" className="text-4xl font-bold tracking-wider text-start sm:text-center z-10 mb-4">
                        N-E-O
                    </NavLink>
                    {
                        links.map((link, index) => (
                            <li key={index}>
                                <Link link={link} />
                            </li>
                        ))
                    }

                    {user && user.role === "admin" && (
                        <li>
                            <Link link="dashboard" />
                        </li>
                    )}
                </ul>
            </div >
        </>
    );
}

export default Links;
