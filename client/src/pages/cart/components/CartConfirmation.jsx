import React from 'react';
import Heading from '../../../components/heading/Heading';

const CartConfirmation = ({ confirmationHandler }) => {
    return (
        <div className={`absolute w-full h-full top-0 left-0 bg-stone-800 bg-opacity-50 flex justify-center items-center`} onClick={confirmationHandler}>
            <div className={`transition duration-300 bg-stone-200 dark:bg-stone-800 p-8 w-1/2 text-center min-w-96`}>
                <Heading title="Your order is now placed" />
            </div>
        </div>
    );
}

export default CartConfirmation;
