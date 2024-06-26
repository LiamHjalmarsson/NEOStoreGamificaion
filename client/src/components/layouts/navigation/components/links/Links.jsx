import React from 'react';
import Link from './Link';
import { useRootContext } from '../../../../../pages/Root';
const links = ["categories", "products"];

const Links = () => {
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
        </>
    );
}

export default Links;
