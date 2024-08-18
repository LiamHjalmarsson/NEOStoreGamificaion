import React from 'react';
import { useRootContext } from '../../../Root';
import { FaLock } from 'react-icons/fa';
import { firstLetter } from '../../../../utils/textTransformation';

const AchievementCard = ({ achievement }) => {
    let { user } = useRootContext();

    let hasAchievement = () => {
        return user.achievements.includes(achievement._id);
    };

    return (
        <div className='bg-stone-200 dark:bg-stone-800 flex flex-col relative justify-center items-center w-24 lg:w-52 h-24 lg:h-52 shadow transition duration-500'>
            <img src={achievement.image} alt='achievement' className='w-12 lg:w-24' />
            {!hasAchievement() && (
                <div className='absolute w-full h-full justify-center items-center flex bg-stone-800 bg-opacity-70'>
                    <FaLock className='text-stone-200 text-3xl' />
                </div>
            )}
            <h3 className='font-semibold lg:text-xl mt-2 text-center'>
                {firstLetter(achievement.title)}
            </h3>
        </div>
    );
}

export default AchievementCard;
