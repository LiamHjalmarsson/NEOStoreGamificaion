import React from 'react';
import Icon from '../Icon';
import { MdShoppingBasket } from 'react-icons/md';
import { useCartContext } from '../../../../../../context/cartContext';

const ShoppingBasket = ({ handelCart }) => {
    let { cartItems, getTotalItems } = useCartContext();

    return (
        <div className='relative' onClick={handelCart}>
            <div className={`${cartItems.length > 0 ? "opacity-100" : "opacity-0"} absolute w-6 h-6 bg-green-500 text-stone-200 rounded-full text-center -top-4 -right-3 font-bold cursor-pointer`}>
                {getTotalItems()}
            </div>
            < Icon icon={<MdShoppingBasket />} />
        </div>
    );
}

export default ShoppingBasket;
