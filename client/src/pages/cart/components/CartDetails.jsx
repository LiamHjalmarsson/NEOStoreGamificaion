import React from 'react';
import Heading from '../../../components/heading/Heading';
import CartProduct from './CartProduct';
import { useCartContext } from '../../../context/cartContext';

const CartDetails = () => {
    let { cartItems } = useCartContext();

    if (cartItems.length > 0) {
        return (
            <div className='w-full flex flex-wrap flex-col gap-8 max-w-3xl mx-auto'>
                {
                    cartItems.length > 0 && (
                        <>
                            <Heading title="Cart" />
                            {
                                cartItems.map((item, index) => (
                                    <CartProduct item={item} key={index} />
                                ))
                            }
                        </>
                    ) || (
                        <Heading title="No items in cart" />
                    )
                }
            </div>
        );
    } else {
        return (
            <div className='w-full flex flex-wrap flex-col gap-8 max-w-3xl mx-auto'>
                <Heading title="Cart is empety" />
            </div>
        )
    }
}

export default CartDetails;
