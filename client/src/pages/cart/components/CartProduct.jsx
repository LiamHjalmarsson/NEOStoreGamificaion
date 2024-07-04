import React from 'react';
import Image from '../../../components/elements/Image';
import { firstLetter } from '../../../utils/textTransformation';

const CartProduct = ({ item, children }) => {
    return (
        <div className='flex flex-col lg-flex-row justify-between items-center gap-2 lg:gap-6 p-2 text-lg bg-stone-200 dark:bg-stone-800 transition-colors duration-500'>
            <div className='flex max-lg:flex-col items-center w-full lg:w-1/2 p-2'>
                <div className='w-full lg:w-32 h-52 lg:h-32 group'>
                    <Image img={item.image} className='shadow-sm' />
                </div>
                <div className='py-2 px-4'>
                    <h3 className='font-bold tracking-wide text-xl'>
                        {firstLetter(item.title)}
                    </h3>
                </div>
            </div>

            <div className='flex gap-6 px-6 flex-grow justify-end max-lg:pb-2'>
                {children}
                <div className='text-center pr-6 font-medium'>
                    {(item.price * item.quantity).toFixed(2)} SEK
                </div>
            </div>
        </div>
    );
}

export default CartProduct;
