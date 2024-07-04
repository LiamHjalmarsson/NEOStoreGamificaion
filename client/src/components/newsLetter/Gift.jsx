import React from 'react';
import { FaQuestion } from "react-icons/fa";
import { useActionData } from 'react-router-dom';

const Gift = ({ gift, selectHandler, isSelected }) => {
    let data = useActionData();

    return (
        <div className='w-full relative h-36 flex justify-center items-center shadow dark:shadow-stone-700' onClick={() => selectHandler(gift)}>
            <div className={`absolute w-full h-full flex justify-center items-center ${isSelected.title === gift.title ? " opacity-0" : "opacity-100"} bg-stone-300 dark:bg-stone-700 duration-500 transition z-20`}>
            </div>
            <img src='/placeholder.png' className='w-full h-full absolute opacity-70' alt='img' />
            {isSelected.title === gift.title && (
                <>
                    <input type="hidden" name="discount" value={gift.discountCode} />
                </>
            )}
            {isSelected.title === gift.title && data && (
                <p className='relative z-10 font-bold text-xl'>
                    {gift.title}
                </p>
            ) || <FaQuestion className='z-20 relative' /> }
        </div>
    );
}

export default Gift;