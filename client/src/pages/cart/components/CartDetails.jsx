import React from 'react';
import Heading from '../../../components/heading/Heading';
import CartProduct from './CartProduct';
import { useCartContext } from '../../../context/cartContext';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const CartDetails = () => {
    let { cartItems, removeFromCart, addToCart } = useCartContext();

    if (cartItems.length > 0) {
        return (
            <div className='w-full flex flex-wrap flex-col gap-4 lg:gap-8 max-w-3xl mx-auto'>
                {
                    cartItems.length > 0 && (
                        <>
                            <Heading title="Cart" />
                            {
                                cartItems.map((item, index) => (
                                    <CartProduct item={item} key={index}>
                                        <div className='flex items-center gap-6 justify-center flex-grow'>
                                            <button onClick={() => removeFromCart(item)} className='text-3xl transition-colors duration-500'>
                                                <CiCircleMinus />
                                            </button>
                                            <p className='font-medium text-xl'>
                                                {item.quantity}
                                            </p>
                                            <button onClick={() => addToCart(item)} className='text-3xl transition-colors duration-500'>
                                                <CiCirclePlus />
                                            </button>
                                        </div>
                                    </CartProduct>
                                ))
                            }
                        </>
                    )
                }
            </div>
        );
    } else {
        return (
            <div className='w-full flex flex-wrap flex-col gap-8 max-w-3xl mx-auto'>
                <Heading title="Cart is empty" />
            </div>
        )
    }
}

export default CartDetails;
