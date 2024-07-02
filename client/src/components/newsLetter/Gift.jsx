import React from 'react';
import { FaQuestion } from "react-icons/fa";

const Gift = ({ gift, selectHandler, isSelected }) => {
    return (
        <div className='w-full relative h-36 flex justify-center items-center shadow shadow-stone-700' onClick={() => selectHandler(gift)}>
            <div className={`absolute w-full h-full flex justify-center items-center ${isSelected.title === gift.title ? " opacity-0" : "opacity-100"} bg-stone-700 duration-500 transition z-20`}>
                <FaQuestion />
            </div>
            <img src='/placeholder.png' className='w-full h-full absolute opacity-70' alt='img' />
            {isSelected.title === gift.title && (
                <>
                    <p className='relative z-10 font-bold text-xl'>
                        {gift.title}
                    </p>
                    <input type="hidden" name="discount" value={gift.discountCode} />
                </>
            )}
        </div>
    );
}

export default Gift;
