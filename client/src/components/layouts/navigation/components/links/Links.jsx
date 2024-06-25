import React from 'react';
import Link from './Link';
import { useRootContext } from '../../../../../pages/Root';
const links = ["categories", "products"];

const Links = () => {
    let { user } = useRootContext();

    return (
        <>
            <ul className=' flex-grow hidden lg:flex justify-center items-center gap-6'>
                {
                    links.map((link, index) => (
                        <li key={index} className='hover:scale-110 transition duration-300'>
                            <Link link={link} />
                        </li>
                    ))
                }

                {user && user.role === "admin" && (
                    <li className='hover:scale-110 transition duration-300'>
                        <Link link="dashboard" />
                    </li>
                )}

            </ul>
        </>
    );
}

export default Links;
