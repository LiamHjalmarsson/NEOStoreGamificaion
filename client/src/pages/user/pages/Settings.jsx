import React from 'react';
import Navigation from '../components/navigation';
import Heading from '../../../components/heading/Heading';

const Settings = () => {
    return (
        <div className='pt-12 flex flex-col gap-6'>
            <Heading title="Settings" />

            <Navigation />
        </div>
    );
}

export default Settings;
