import React from 'react';
import { useDashboard } from '../Dashboard';
import Stat from '../components/Stat';

const Stats = () => {
    let { stats } = useDashboard();

    return (
        <div className='w-full flex flex-col gap-12 pr-6'>
            <div className='flex flex-wrap gap-12 max-w-4xl w-full mx-auto mt-12'>
                {
                    Object.entries(stats).map((stat, index) => (
                        <Stat key={index} stat={stat} />
                    ))
                }
            </div>

            <div className='p-4 bg-stone-800 w-full flex justify-center text-stone-200 items-center grow'>
                ORDERS, Purschases
            </div>
        </div>
    );
}

export default Stats;
