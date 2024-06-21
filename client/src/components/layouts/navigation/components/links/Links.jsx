import React from 'react';
import Link from './Link';

const links = ["categories", "products"];

const Links = () => {
    return (
        <>
            <ul className='flex-grow flex justify-center items-center gap-6'>
                {
                    links.map((link, index) => (
                        <li key={index} className='hover:scale-110 transition duration-300'>
                            <Link link={link} />
                        </li>
                    ))
                }
            </ul>
        </>
    );
}

export default Links;
