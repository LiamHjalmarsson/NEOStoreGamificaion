import React from 'react';
import Image from '../../../../elements/Image';
import { Link } from 'react-router-dom';

const CartItem = ({ item }) => {
    return (
        <li className=' p-4 border-stone-700 border'>
            <Link to={`/products/${item.title}`} className='flex gap-4 items-center'>
                <div className='flex-grow pr-6'>
                    <h3 className='font-semibold text.lg'>
                        {item.title}
                    </h3>
                    <div className='flex justify-between mt-2'>
                        <p>
                            {item.price} SEK
                        </p>
                        <p>
                            Size: {item.size}
                        </p>
                    </div>
                </div>
                <div className='h-24 overflow-hidden'>
                    <Image img={item.image} />
                </div>
            </Link>
        </li>
    );
}

export default CartItem;
