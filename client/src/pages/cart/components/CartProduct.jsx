import React from 'react';
import Image from '../../../components/elements/Image';
import { firstLetter } from '../../../utils/textTransformation';

const CartProduct = ({ item, children }) => {
    return (
        <div className='flex flex-col lg:flex-row justify-between items-center gap-2 lg:gap-6 text-lg dark:bg-stone-800 transition-colors duration-500'>
            <div className='flex max-lg:flex-col items-center w-full lg:w-1/2 p-2'>
                <div className='w-full lg:w-32 h-52 lg:h-32 group'>
                    <Image img={item.image} className='shadow-sm' />
                </div>
                <div className='py-2 px-4 flex flex-col gap-2 w-full'>
                    <h3 className='font-bold tracking-wide text-xl text-center mb-2'>
                        {firstLetter(item.title)}
                    </h3>
                    <div className='text-center lg:pr-6 font-medium flex justify-between'>
                        <span>
                            {(item.price * item.quantity).toFixed(2)} SEK
                        </span>
                        <span>
                            {children}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartProduct;
