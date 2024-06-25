import React from 'react';
import Image from '../../../../elements/Image';
import { Link } from 'react-router-dom';
import { firstLetter } from '../../../../../utils/textTransformation';
import { useCartContext } from '../../../../../context/cartContext';
import { FaMinus, FaPlus } from 'react-icons/fa';

const CartItem = ({ item }) => {
    let { removeFromCart, addToCart } = useCartContext();

    return (
        <li className='border-stone-800 dark:border-indigo-500 border-b-2 p-2 relative'>
            <Link to={`/products/${item.title}`} className='flex gap-4 items-center'>
                <div className='flex-grow p-2'>
                    <h3 className='font-semibold text-lg'>
                        {firstLetter(item.title)}
                    </h3>
                    <span>
                        {item.price} SEK
                    </span>
                </div>
                <div className='flex justify-center items-center gap-4'>
                    <span onClick={() => removeFromCart(item)} className='p-2'>
                        <FaMinus />
                    </span>
                    <span className='font-bold text-lg'>
                        {item.quantity}
                    </span>
                    <span onClick={() => addToCart(item)} className='p-2'>
                        <FaPlus />
                    </span>
                </div>
                <div className='w-14'>
                    <Image img={item.image} />
                </div>
            </Link>
        </li>
    );
}

export default CartItem;
