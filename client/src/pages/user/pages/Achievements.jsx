import React from 'react';
import Navigation from '../components/navigation';
import Heading from '../../../components/heading/Heading';
import { FaLock } from 'react-icons/fa';
import { useUserContext } from '../User';
import { useRootContext } from '../../Root';
import { firstLetter } from '../../../utils/textTransformation';

const Achievements = () => {
    let { achievements } = useUserContext();
    let { user } = useRootContext();

    let hasAchievement = (id) => {
        return user.achievements.some((achievement) => achievement !== id);
    };

    return (
        <div className='pt-24 flex flex-col gap-6'>
            <Heading title="Achievements" />

            <Navigation />

            <div className='flex gap-12 mx-auto max-w-3xl w-full mt-12'>
                {
                    achievements.map((achievement, index) => (
                        <div className='bg-stone-200 dark:bg-stone-800 flex flex-col relative justify-center items-center w-52 h-52 shadow transition duration-500' key={index}>
                            <img src={achievement.image} alt='achievement image' className='w-24' />
                            {hasAchievement(achievement._id) && (
                                <div className=' absolute w-full h-full justify-center items-center flex bg-stone-800 bg-opacity-70'>
                                    <FaLock size={46} className='text-stone-200' />
                                </div>
                            )}
                            <h3 className='font-semibold text-xl mt-2'>
                                {firstLetter(achievement.title)}
                            </h3>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Achievements;

