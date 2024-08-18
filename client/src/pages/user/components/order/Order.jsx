import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

const Order = ({ order }) => {
    let date = item => new Date(item).toLocaleDateString("en-US");

    return (
        <div className='bg-stone-200 dark:bg-stone-800 p-4 lg:p-8 flex justify-between items-center transition duration-500 shadow'>
            <h3 className='font-semibold lg:text-xl'>
                Order Purchase {date(order.createdAt)}
            </h3>
            <div className='flex items-center gap-6'>
                <span>Items: </span>
                <span className='font-semibold'>10</span>
                <span className='p-3 bg-stone-300 dark:bg-stone-700 round-sm text-rose-500 rounded-full transition duration-500'>
                    <FaArrowDown />
                </span>
            </div>
        </div>
    );
}

export default Order;
