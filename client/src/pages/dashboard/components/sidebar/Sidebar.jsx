import React, { useState } from 'react';
import Link from './Link';
import { FaHome, FaTimes } from 'react-icons/fa';

const Sidebar = ({ links }) => {
    let [showSideBar, setShowSideBar] = useState(false);

    let showHandler = () => {
        setShowSideBar(!showSideBar);
    }

    return (
        <>

            <div className={`fixed lg:relative top-0 left-0 lg:left-auto lg:top-auto w-full lg:w-[10vw] min-w-52 h-full lg:h-auto px-4 max-lg:pt-24 pt-12 max-lg:bg-stone-200 max-lg:dark:bg-stone-800 transition-transform duration-500 ${showSideBar ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} z-30`}>
                <button className='lg:hidden absolute top-4 right-4' onClick={showHandler}>
                    <FaTimes size={24} />
                </button>
                <ul className='flex flex-col gap-4 h-full py-4 pl-4 rounded-lg bg-stone-200 dark:bg-stone-800 transition-transform duration-500 '>
                    {links.map((link, index) => (
                        <Link key={index} link={link} />
                    ))}
                </ul>
            </div>

            <button className={` lg:hidden transition duration-500 ${showSideBar ? "bg-rose-500" : " bg-blue-500"} p-4 rounded-full text-stone-200 fixed left-6 bottom-6 z-40`} onClick={showHandler}>
                <FaHome className='text-2xl lg:text-4xl' />
            </button>
        </>
    );
}

export default Sidebar;
