import React from 'react';
import Link from './Link';

const Sidebar = ({ links }) => {
    return (
        <div className='w-[10vw] min-w-52 relative transition duration-500 px-4 pt-12'>
            <ul className='flex flex-col gap-4 bg-stone-200 dark:bg-stone-800 h-full py-4 pl-4 rounded-lg'>
                {links.map((link, index) => (
                    <Link key={index} link={link} />
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
