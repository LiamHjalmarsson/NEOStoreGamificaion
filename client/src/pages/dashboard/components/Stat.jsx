import React from 'react';
import { FaUser } from 'react-icons/fa';

const Stat = ({ stat }) => {
    return (
        <div className='bg-stone-200 relative shadow min-w-48 dark:bg-stone-800 p-4 grow text-center h-48 flex justify-between items-center flex-col transition duration-300'>
            <div className='uppercase font-semibold tracking-wider'>
                <p>
                    {stat[0]}
                </p>
            </div>
            <FaUser className='text-4xl' />
            <p className='text-2xl font-semibold'>
                {stat[1]}
            </p>
        </div>
    );
}

export default Stat;
