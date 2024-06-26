import React from 'react';
import ProgressBar from './ProgressBar';

const Banner = ({ user }) => {
    return (
        <div className='relative h-[30vh] bg-gradient-to-l from-slate-400 via-slate-600 to-slate-800 flex justify-center items-center'>
            <div className='w-1/2 absolute left-0'>
                <div className='max-w-md mx-auto text-stone-200'>
                    <h1 className='font-bold text-3xl'>
                        <span>
                            Välkommen
                        </span>
                        <span className='uppercase text-5xl tracking-widest'>
                            {" " + user.firstName}
                        </span>
                    </h1>
                </div>
            </div>

            <div className='absolute w-96 -bottom-12 right-1/3 p-6 rounded-md bg-stone-200 dark:bg-stone-800 flex flex-col gap-4 transition duration-300'>
                <h2 className='font-semibold text-xl'>
                    Rank
                </h2>
                <div className='flex gap-4 justify-between text-lg'>
                    <span>
                        Collected points
                    </span>
                    <span>
                        {user.pointsEarned}
                    </span>
                </div>
                <div className='flex gap-4 justify-between text-lg'>
                    <span>
                        Points value
                    </span>
                    <span>
                        {user.pointsEarned / 10}
                    </span>
                </div>

                <ProgressBar totalUserPoints={user.totalPointsEarned} unlockNextRank={20000} />
            </div>
        </div>
    );
}

export default Banner;
