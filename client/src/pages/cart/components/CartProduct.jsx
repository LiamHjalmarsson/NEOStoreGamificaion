import React from 'react';
import Image from '../../../components/elements/Image';
import { firstLetter } from '../../../utils/textTransformation';

const CartProduct = ({ item, children }) => {
    return (
        <div className='flex justify-between items-center gap-6 p-2 text-lg bg-stone-200 dark:bg-stone-800 transition-colors duration-500'>
            <div className='flex items-center w-1/2 p-2'>
                <div className='w-32 h-32 group'>
                    <Image img={item.image} className='shadow-sm' />
                </div>
                <div className='py-2 px-4'>
                    <h3 className='font-bold tracking-wide text-xl'>
                        {firstLetter(item.title)}
                    </h3>
                </div>
            </div>

            <div className='flex gap-6 px-6 flex-grow justify-end'>
                {children}
                <div className='text-center pr-6 font-medium'>
                    {(item.price * item.quantity).toFixed(2)} SEK
                </div>
            </div>
        </div>
    );
}

export default CartProduct;
