import React, { useContext, useState } from 'react';
import CartDetailRow from './CartDetailRow';
import { Form } from 'react-router-dom';
import { useCartContext } from '../../../context/cartContext';
import Button from '../../../components/elements/Button';
import Input from '../../../components/elements/Input';

const UserDetails = ({ discountHandler, discount }) => {
    let { getCartTotal, clearCart, cartItems } = useCartContext();
    return (
        <Form action='/cart' method='patch' className='flex w-1/2 gap-40 overflow-hidden relative'>
            <div className={`transition duration-300 ease-in-out w-full border-stone-700 bg-opacity-80 shadow-middle min-w-96 rounded-md shadow-primary justify-center items-start flex flex-col gap-8 max-w-lg px-6`}>
                <h3 className='text-5xl tracking-wider'>
                    Order
                </h3>

                <CartDetailRow title="Total: " text={getCartTotal()} />

                <div className='flex w-full justify-between'>
                    <p>
                        Earn
                    </p>
                </div>

                <Input
                    input={{
                        type: "number",
                        min: "0",
                        max: String(getCartTotal()),
                        name: "discount",
                        title: "Add your points ",
                        id: "discount",
                        onChange: discountHandler,
                        value: discount
                    }}
                />

                <div className='flex-grow flex justify-center items-end gap-8 text-sm'>
                    <Input
                        input={{
                            type: "text",
                            name: "discount code",
                            title: "Add discount code",
                            id: "discount",
                        }}
                    />

                    <button className='p-4 border border-primary hover:bg-primary hover:text-white dark:hover:bg-_purple dark:hover:text-primary transition duration-300 ease-in-out font-bold dark:border-_purple rounded-md dark:shadow-_purple'>
                        Apply
                    </button>
                </div>

                <div className='flex flex-wrap gap-4 w-full'>
                    <Button onclick={clearCart} type="button" custom="text-red-500 border-red-500 hover:bg-red-500">
                        Clear cart
                    </Button>
                    <Button type="button">
                        Continue
                    </Button>
                </div>
            </div>

            <div className={`transition duration-300 ease-in-out w-full bg-_white dark:bg-primary bg-opacity-80 shadow-middle min-w-96 rounded-md shadow-primary p-6 justify-center items-start flex flex-col gap-8 max-w-lg`}>
                <div className='flex flex-wrap gap-4 w-full'>

                    <Input
                        input={{
                            type: "text",
                            name: "name",
                            title: "Name",
                            id: "name",
                        }}
                    />

                    <Button type="button">
                        Back
                    </Button>
                    <Button type="submit">
                        Purchase
                    </Button>
                </div>
            </div>
        </Form>
    );
}

export default UserDetails;
