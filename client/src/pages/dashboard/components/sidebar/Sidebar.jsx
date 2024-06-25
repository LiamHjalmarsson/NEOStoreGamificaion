import React from 'react';
import Link from './Link';

const Sidebar = ({ links }) => {
    return (
        <div className=' w-64 h-[90vh] p-8 bg-indigo-500 text-stone-200 dark:bg-stone-800 transition duration-300'>
            <ul className='flex flex-col gap-4'>
                {links.map((link, index) => (
                    <Link key={index} link={link} />
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
