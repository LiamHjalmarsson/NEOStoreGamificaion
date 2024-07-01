import React from 'react';
import { firstLetter } from '../../../utils/textTransformation';
import Image from '../../../components/elements/Image';
import Headings from '../../../components/heading/Headings';

const CartConfirmation = ({ confirmationHandler, data }) => {
    return (
        <div className={`absolute w-full h-full top-0 left-0 bg-stone-800 bg-opacity-50 flex justify-center items-center`} onClick={confirmationHandler}>
            <div className={`transition duration-300 bg-stone-200 dark:bg-stone-800 p-8 w-1/2 min-w-96 max-w-3xl text-center `}>
                <Headings heading="Your order is now placed" subHeading={`Purchase made ${data.purchase.createdAt}`} />

                {data.cart.map((item, index) => (
                    <div className="flex justify-between items-center gap-6 p-2 text-lg bg-stone-200 dark:bg-stone-800 transition-colors duration-500 mt-8" key={index}>
                        <div className="flex items-center w-1/2 p-2">
                            <div className="w-32 h-32">
                                <Image img={item.image} className="shadow-sm" />
                            </div>
                            <div className="py-2 px-4">
                                <h3 className="font-bold tracking-wide text-xl">
                                    {firstLetter(item.title)}
                                </h3>
                            </div>
                        </div>

                        <div className="w-1/4 text-center">
                            <p className="font-medium text-xl">{item.quantity}</p>
                        </div>

                        <div className="w-1/4 text-end pr-6 font-medium">
                            {(item.price * item.quantity).toFixed(2)} SEK
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CartConfirmation;
