import React from 'react';
import Headings from '../../../components/heading/Headings';
import { FaX } from 'react-icons/fa6';
import CartProduct from './CartProduct';

const CartConfirmation = ({ confirmationHandler, data }) => {
    return (
        <div className={`absolute w-full h-full top-0 left-0 bg-stone-800 bg-opacity-50 flex justify-center items-center`} onClick={confirmationHandler}>
            <div className={`transition duration-300 bg-stone-200 dark:bg-stone-800 p-8 w-1/2 min-w-96 max-w-3xl text-center `}>

                <FaX onClick={confirmationHandler}  size={28} />

                <Headings heading="Your order is now placed" subHeading={`Purchase made ${data.purchase.createdAt}`} />

                {data.cart.map((item, index) => (
                    <CartProduct item={item} key={index} />
                ))}
            </div>
        </div>
    );
}

export default CartConfirmation;
