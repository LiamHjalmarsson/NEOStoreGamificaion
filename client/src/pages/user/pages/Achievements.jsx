import React from 'react';
import Navigation from '../components/navigation';
import Heading from '../../../components/heading/Heading';
import { FaTrophy } from 'react-icons/fa';

const Achievements = () => {
    return (
        <div className='pt-24 flex flex-col gap-6'>
            <Heading title="Achievements" />

            <Navigation />

            <div className='flex flex-col gap-12 mx-auto max-w-3xl w-full mt-12'>
                <div className='bg-stone-200 dark:bg-stone-800 p-6 flex relative justify-center items-center w-52 h-52 shadow'>
                    <FaTrophy className='text-5xl' />
                    <div className=' absolute bottom-0 p-4'>
                        <h3 className='font-semibold text-xl'>
                            Achievement
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Achievements;

