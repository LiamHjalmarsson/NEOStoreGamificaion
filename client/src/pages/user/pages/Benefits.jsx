import React from 'react';
import Navigation from '../components/navigation';
import Heading from '../../../components/heading/Heading';
import Benefit from '../components/Benefit';
import { useUserContext } from '../User';
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
    let { ranks } = useUserContext();

    return (
        <div className='pt-24 flex flex-col gap-6'>
            <Heading title="Benefits" />

            <Navigation />

            <div className='flex gap-12 px-12 mx-auto mt-12 w-full flex-wrap justify-center'>
                {
                    ranks.map((rank, index) => (
                        <Benefit key={index} rank={rank} />
                    ))
                }
            </div>
        </div>
    );
}

export default Benefits;
