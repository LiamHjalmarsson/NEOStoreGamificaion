import React from 'react';
import ProgressBar from './ProgressBar';
import { firstLetter } from '../../../utils/textTransformation';

const Benefit = ({ rank }) => {
    return (
        <div className={`p-6 bg-stone-200 dark:bg-stone-800 flex flex-col gap-6 w-96 transition duration-500`}>
            <h3 className='text-3xl font-semibold text-center'>
                {firstLetter(rank.rank)}
            </h3>
            <ProgressBar totalUserPoints={100} unlockNextRank={rank.unlockAt} />
            {rank.benefits.map((benefit, index) => (
                <div className='font-semibold' key={index}>
                    {benefit.title}
                </div>
            ))}
        </div>
    );
}

export default Benefit;
