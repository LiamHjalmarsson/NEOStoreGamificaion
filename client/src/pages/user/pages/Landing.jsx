import React from 'react';
import { useRootContext } from '../../Root';
import { FaJediOrder, FaTrophy, FaUser } from 'react-icons/fa';
import Card from '../components/Card';
import Banner from '../components/Banner';
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
    let { user } = useRootContext();
    return (
        <>
            <Banner user={user} />

            <div className='mx-auto mt-32 max-w-6xl grid grid-cols-2 gap-24'>
                {
                    cards.map((item, index) => (
                        <Card item={item} key={index} id={user._id} />
                    ))
                }
            </div>
        </>
    );
}

export default Landing;
