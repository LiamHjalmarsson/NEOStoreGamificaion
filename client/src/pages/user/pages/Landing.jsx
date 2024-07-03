import React from 'react';
import { FaJediOrder, FaTrophy, FaUser } from 'react-icons/fa';
import LandingCard from '../components/LandingCard';
import Banner from '../components/banner/Banner';
import { FaRankingStar } from 'react-icons/fa6';

let cards = [
    {
        title: "Benefits",
        url: "benefits",
        icon: <FaRankingStar />,
        text: "Sett your profile details"
    },
    {
        title: "Orders",
        url: "orders",
        icon: <FaJediOrder />,
        text: "Sett your profile details"
    },
    {
        title: "Achievements",
        url: "achievements",
        icon: <FaTrophy />,
        text: "Sett your profile details"
    },
    {
        title: "Settings",
        url: "settings",
        icon: <FaUser />,
        text: "Sett your profile details"
    },
]

const Landing = () => {
    return (
        <>
            <Banner />

            <div className='mx-auto mt-32 max-w-6xl grid grid-cols-2 gap-24 pb-12'>
                {
                    cards.map((item, index) => (
                        <LandingCard item={item} key={index} />
                    ))
                }
            </div>
        </>
    );
}

export default Landing;
