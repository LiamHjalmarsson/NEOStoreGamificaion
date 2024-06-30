import React from 'react';

const CartFormRow = ({ title, text }) => {
    return (
        <div className='flex w-full pb-2 border-b-2 border-stone-800 dark:border-stone-200'>
            <div className='flex-grow'>
                <h3 className='font-semibold text-lg'>
                    {title}
                </h3>
            </div>
            <p>
                {text}
            </p>
        </div>
    );
}

export default CartFormRow;
