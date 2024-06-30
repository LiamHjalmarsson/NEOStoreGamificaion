import React from 'react';
import Heading from '../../../components/heading/Heading';
import { useDashboard } from '../Dashboard';
import { FaUser } from 'react-icons/fa';
import Stat from '../components/Stat';

const Stats = () => {
    let { stats } = useDashboard();

    return (
        <div className='w-full flex flex-col gap-12 grow h'>
            <Heading title="Stats" />

            <div className='flex flex-wrap gap-12 max-w-4xl w-full mx-auto'>
                {
                    Object.entries(stats).map((stat, index) => (
                    <Stat key={index} stat={stat}/>
                    ))
                }
            </div>
        </div>
    );
}

export default Stats;
