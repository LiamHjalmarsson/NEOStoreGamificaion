import React from 'react';
import Heading from '../../../components/heading/Heading';
import { useDashboard } from '../Dashboard';
import { FaUser } from 'react-icons/fa';

const Stats = () => {
    let { stats } = useDashboard();

    return (
        <div className='w-full flex flex-col gap-12 grow h'>
            <Heading title="Stats" />

            <div className='flex flex-wrap gap-12 max-w-4xl w-full mx-auto'>
                {
                    Object.entries(stats).map((stat, index) => (
                        <div key={index} className='bg-stone-200 relative rounded-sm shadow min-w-48 dark:bg-stone-800 p-4 grow text-center h-48 flex justify-between items-center flex-col transition duration-300'>
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
                    ))
                }
            </div>
        </div>
    );
}

export default Stats;
