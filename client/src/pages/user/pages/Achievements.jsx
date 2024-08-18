import React from 'react';
import Navigation from '../components/navigation';
import Heading from '../../../components/heading/Heading';
import { useUserContext } from '../User';
import AchievementCard from '../components/achievement/AchievementCard';

const Achievements = () => {
    let { achievements } = useUserContext();

    return (
        <div className='pt-32 flex flex-col gap-6'>
            <Heading title="Achievements" />

            <Navigation />

            <div className='flex gap-6 lg:gap-12 flex-wrap mx-auto max-w-4xl w-full justify-center px-1'>
                {
                    achievements.map((achievement, index) => (
                        <AchievementCard achievement={achievement} key={index} />
                    ))
                }
            </div>
        </div>
    );
}

export default Achievements;

