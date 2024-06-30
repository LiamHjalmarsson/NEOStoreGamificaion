import React from 'react';
import Link from './Link';

const Sidebar = ({ links }) => {
    return (
        <div className='w-96 h-screen relative transition duration-500 bg-stone-200 dark:bg-stone-800'>
            <ul className='flex flex-col gap-4 bg-stone-200 dark:bg-stone-800  w-full h-full p-12'>
                {links.map((link, index) => (
                    <Link key={index} link={link} />
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
