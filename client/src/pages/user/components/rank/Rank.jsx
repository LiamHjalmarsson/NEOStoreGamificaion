import React from 'react';
import ProgressBar from '../ProgressBar';
import { firstLetter } from '../../../../utils/textTransformation';
import { useRootContext } from '../../../Root';
import Benefit from './Benefit';

const Rank = ({ rank }) => {
    let { user } = useRootContext();

    let points = user.totalPointsEarned <= rank.unlockAt ? user.totalPointsEarned : rank.unlockAt;

    return (
        <div className={`p-6 bg-stone-200 dark:bg-stone-800 flex flex-col gap-6 w-96 transition duration-500 ${user.ranks.includes(rank._id) ? "" : " opacity-50"}`}>
            <h3 className='text-3xl font-semibold text-center'>
                {firstLetter(rank.title)}
            </h3>
            <ProgressBar totalUserPoints={points} unlockNextRank={rank.unlockAt} />
            {/* {rank.benefits.map((benefit, index) => (
                <Benefit />
            ))} */}
        </div>
    );
}

export default Rank;
