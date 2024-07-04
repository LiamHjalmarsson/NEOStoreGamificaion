import React from 'react';
import ProgressBar from '../ProgressBar';
import { useRootContext } from '../../../Root';
import { firstLetter } from '../../../../utils/textTransformation';

const Progress = ({ user }) => {
    let { ranks } = useRootContext();

    let unlocked = ranks.find(rank => user.ranks.includes(rank._id));
    let upcomingRank = ranks.find(rank => user.totalPointsEarned < rank.unlockAt);

    return (
        <div className='absolute w-96 -bottom-12 right-1/3 p-6 bg-stone-200 dark:bg-stone-800 flex flex-col gap-4 transition duration-500'>
            <h2 className='font-semibold text-xl flex w-full justify-between'>
                <span>
                    Rank
                </span>
                <span>
                    {
                        unlocked && firstLetter(unlocked.title)
                    }
                </span>
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
                    {user.pointsEarned / 10} SEK
                </span>
            </div>

            <ProgressBar totalUserPoints={user.totalPointsEarned} unlockNextRank={upcomingRank ? upcomingRank.unlockAt : "MAX"} />
        </div>
    );
}

export default Progress;
