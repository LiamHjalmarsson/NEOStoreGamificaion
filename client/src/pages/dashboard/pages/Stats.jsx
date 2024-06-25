import React from 'react';
import Heading from '../../../components/heading/Heading';
import { useDashboard } from '../Dashboard';

const Stats = () => {
    let { stats } = useDashboard();

    return (
        <div className='w-full flex flex-col gap-12 grow h'>
            <Heading title="Stats" />

            <div className='flex gap-12 max-w-4xl w-full mx-auto'>
                {
                    stats.map((stat, index) => (
                        <div key={index} className='bg-indigo-500 text-stone-200 dark:bg-stone-800 p-4 grow text-center h-40 flex justify-center items-center transition duration-300'>
                            <p>

                            </p>
                            <p className='text-4xl font-semibold'>
                                {stat}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Stats;
