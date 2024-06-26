import React from 'react';
import Navigation from '../components/navigation';
import Heading from '../../../components/heading/Heading';

const Achievements = () => {
    return (
        <div className='pt-12 flex flex-col gap-6'>
            <Heading title="Achievements" />

            <Navigation />
        </div>
    );
}

export default Achievements;

