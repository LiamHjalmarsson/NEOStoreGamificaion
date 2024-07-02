import React, { useState } from 'react';
import Gift from './Gift';

let gifts = [
    {
        image: "s",
        discountCode: "s",
        title: "s"
    },
    {
        image: "d",
        discountCode: "d",
        title: "d"
    },
    {
        image: "w",
        discountCode: "w",
        title: "w"
    },
];

const Gifts = () => {
    let [selectedGift, setSelectedGift] = useState({});

    let selectHandler = (gift) => {
        setSelectedGift(gift);
    }

    return (
        <div className='flex w-full max-lg:flex-col gap-6 justify-between p-6'>
            {gifts.map((gift, index) => (
                <Gift key={index} gift={gift} selectHandler={selectHandler} isSelected={selectedGift} />
            ))}
        </div>
    );
}

export default Gifts;
