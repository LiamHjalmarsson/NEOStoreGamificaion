import React from 'react';
import Navigation from '../components/navigation';
import Heading from '../../../components/heading/Heading';
import Rank from '../components/rank/Rank';
import { useRootContext } from '../../Root';

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
    let { ranks } = useRootContext();

    return (
        <div className='pt-32 flex flex-col gap-6'>
            <Heading title="Benefits" />

            <Navigation />

            <div className='flex px-6 gap-6 lg:gap-12 lg:px-12 mx-auto lg:mt-12 w-full flex-wrap justify-center'>
                {
                    ranks.map((rank, index) => (
                        <Rank key={index} rank={rank} />
                    ))
                }
            </div>
        </div>
    );
}

export default Benefits;
