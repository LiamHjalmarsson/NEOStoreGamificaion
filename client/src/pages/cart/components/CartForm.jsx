import React, { useContext, useState } from 'react';
import CartFormRow from './CartFormRow';
import { Form } from 'react-router-dom';
import { useCartContext } from '../../../context/cartContext';
import Button from '../../../components/elements/Button';
import Input from '../../../components/elements/Input';
import Heading from '../../../components/heading/Heading';
import { useRootContext } from '../../Root';

const CartForm = () => {
    let { getCartTotal, clearCart, cartItems } = useCartContext();
    let { user } = useRootContext();

    let [discount, setDiscount] = useState(0);

    let discountHandler = (e) => {
        let value = parseInt(e.target.value);
        let maxDiscount = getCartTotal();

        if (value <= maxDiscount) setDiscount(value);
    }

    let shippingFee = getCartTotal() >= 1000 ? 0 : 75;
    let totalToPay = getCartTotal() - discount + shippingFee;
    let earnPoints = user ? getCartTotal() - discount : 0;

    return (
        <Form action='/cart' method='post' className='relative'>
            <div className={`bg-stone-200 dark:bg-stone-800 p-8 rounded-md w-full justify-center items-start flex flex-col gap-12 min-w-96 transition duration-500`}>
                <Heading title="Order" />

                <CartFormRow title="Total: " text={getCartTotal() + " SEK"} />

                <CartFormRow title="Shipping fees: " text={shippingFee + " SEK"} />

                <div className='w-full'>
                    {user && (
                            <p className='text-sm text-rose-500'>
                                You have {user.pointsEarned} points to use
                            </p>
                        ) || (
                            <p className='text-sm text-rose-500'>
                                Log in to use your points
                            </p>
                        )
                    }
                    <div className='flex w-full justify-center items-end gap-8 text-sm pb-4 border-b-2 border-stone-800 dark:border-stone-200'>
                        <Input
                            input={{
                                type: "number",
                                name: "discount",
                                id: "discount",
                                min: 0,
                                max: getCartTotal(),
                                value: discount,
                                onChange: discountHandler
                            }}
                        />

                        <button type='button' className='p-4 border border-stone-800 dark:border-rose-500 transition duration-500 ease-in-out font-bold' onClick={discountHandler}>
                            Apply
                        </button>
                    </div>
                </div>

                <input type="hidden" name="shippingFee" value={shippingFee} />
                <input type="hidden" name="totalToPay" value={totalToPay} />
                <input type="hidden" name="earnPoints" value={earnPoints} />
                <input type="hidden" name="cart" value={JSON.stringify(cartItems)} />
                <input type="hidden" name="user" value={JSON.stringify(user)} />

                <div className='flex w-full justify-between'>
                    <CartFormRow title="Earn:" text={user ? `${earnPoints} points` : `Become a member to get ${earnPoints} points`} />
                </div>

                <CartFormRow title="Total To Pay: " text={totalToPay + " SEK"} />

                <Input
                    input={{
                        type: "text",
                        name: "name",
                        title: "Name",
                        id: "name",
                    }}
                    custom="w-full"
                />

                <div className='flex flex-wrap justify-between gap-4 w-full'>
                    <Button onclick={clearCart}>
                        Clear cart
                    </Button>
                    <Button type="submit" custom="bg-stone-800 text-stone-200 hover:bg-stone-700">
                        Purchase
                    </Button>
                </div>
            </div>
        </Form>
    );
}

export default CartForm;
