import React from 'react';
import Link from './Link';
import { useRootContext } from '../../../../../pages/Root';
const links = ["categories", "products"];

const Links = ({ open }) => {
    let { user } = useRootContext();

    return (
        <>
            <ul className='flex-grow hidden lg:flex justify-center items-center gap-12'>
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

            <div className={`${open ? "translate-x-0" : " translate-x-full"} fixed top-0 w-full h-screen right-0 bg-stone-800 z-10 lg:hidden transition duration-500 transform`}>
                <div>
                    <ul className=' h-full flex-grow flex flex-col items-center gap-12 py-32'>
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
                </div>
            </div >
        </>
    );
}

export default Links;
