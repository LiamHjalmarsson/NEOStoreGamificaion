import React from 'react';
import { AiOutlineProduct } from 'react-icons/ai';
import { HiUsers } from 'react-icons/hi';
import { TbCategoryFilled } from 'react-icons/tb';
import { BiSolidPurchaseTag } from "react-icons/bi";

const Stat = ({ stat }) => {
    return (
        <div className='bg-stone-200 dark:bg-stone-800 rounded-xl shadow min-w-48 p-4 grow text-center h-48 flex items-center flex-col transition duration-500 relative'>
            <div className='absolute -top-4 p-2 md:p-4 bg-rose-600 rounded-lg text-2xl md:text-3xl text-stone-200'>
                {stat[0] === "users" && <HiUsers />}
                {stat[0] === "products" && <AiOutlineProduct />}
                {stat[0] === "categories" && <TbCategoryFilled />}
                {stat[0] === "purchases" && <BiSolidPurchaseTag />}
            </div>
            <div className='mt-8 md:mt-12 text-stone-800 dark:text-stone-200'>
                <p className='text-lg md:text-2xl font-semibold'>
                    {stat[1]}
                </p>
                <p className='uppercase font-semibold tracking-wider text-sm md:text-xl'>
                    {stat[0]}
                </p>
            </div>
        </div>
    );
}

export default Stat;
