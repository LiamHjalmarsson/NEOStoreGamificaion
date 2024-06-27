import React from 'react';
import Navigation from '../components/navigation';
import Heading from '../../../components/heading/Heading';
import { firstLetter } from '../../../utils/textTransformation';
import ProgressBar from '../components/ProgressBar';

let ranks = [
    {
        rank: "bronze",
        unlockAt: 1000,
        benefits: [
            {
                title: "Welcome gift",
            },
        ]
    },
    {
        rank: "silver",
        unlockAt: 2500,
        benefits: [
            {
                title: "10 %",
            },
            {
                title: "Special offers",
            },
        ]
    },
    {
        rank: "gold",
        unlockAt: 5000,
        benefits: [
            {
                title: "10 %",
            },
            {
                title: "Special offers",
            },
        ]
    },
];

const Benefits = () => {
    return (
        <div className='pt-12 flex flex-col gap-6'>
            <Heading title="Benefits" />

            <Navigation />

            <div className='flex gap-12 px-12 mx-auto mt-12 w-full flex-wrap justify-center'>
                {
                    ranks.map((rank, index) => (
                        <div key={index} className={`p-6 bg-stone-200 flex flex-col gap-6 rounded-sm w-96`}>
                            <h3 className='text-3xl font-semibold text-center'>
                                {firstLetter(rank.rank)}
                            </h3>
                            <ProgressBar totalUserPoints={100} unlockNextRank={rank.unlockAt} />
                            {rank.benefits.map((benefit, i) => (
                                <div className='font-semibold' key={i}>
                                    {benefit.title}
                                </div>
                            ))}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Benefits;
