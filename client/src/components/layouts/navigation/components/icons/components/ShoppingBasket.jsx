import React from 'react';
import Icon from '../Icon';
import { MdShoppingBasket } from 'react-icons/md';
import { useCartContext } from '../../../../../../context/cartContext';

const ShoppingBasket = ({ handelCart }) => {
    let { cartItems, getTotalItems } = useCartContext();

    return (
        <div className='relative'>
            <div className={`${cartItems.length > 0 ? "opacity-100" : "opacity-0"} duration-300 transition absolute text-sm font-bold rounded-full bg-green-500 px-2 -top-4 -right-4`}>
                {getTotalItems()}
            </div>
            < Icon icon={<MdShoppingBasket />} onclick={handelCart} />
        </div>
    );
}

export default ShoppingBasket;
