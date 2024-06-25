import React, { useContext, useState } from 'react';
import CartDetailRow from './CartDetailRow';
import { Form } from 'react-router-dom';
import { useCartContext } from '../../../context/cartContext';
import Button from '../../../components/elements/Button';
import Input from '../../../components/elements/Input';
import Heading from '../../../components/heading/Heading';
import { useRootContext } from '../../Root';

const UserDetails = () => {
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
        <Form action='/cart' method='patch' className='relative'>
            <div className={`transition duration-300 bg-stone-800 p-8 rounded-md w-full justify-center items-start flex flex-col gap-12 min-w-96`}>
                <Heading title="Order" />

                <CartDetailRow title="Total: " text={getCartTotal() + " SEK"} />

                <CartDetailRow title="Shipping fees: " text={shippingFee + " SEK"} />

                <div className='flex w-full justify-center items-end gap-8 text-sm pb-4 border-b-2 border-stone-200'>
                    <Input
                        input={{
                            type: "number",
                            name: "discount code",
                            title: "Add discount code",
                            id: "discount",
                            min: 0,
                            max: getCartTotal(),
                            value: discount,
                            onChange: discountHandler
                        }}
                    />

                    <button type='button' className='p-4 border border-primary hover:bg-primary hover:text-white transition duration-300 ease-in-out font-bold rounded-md' onClick={discountHandler}>
                        Apply
                    </button>
                </div>

                <input type="hidden" name="shippingFee" value={shippingFee} />
                <input type="hidden" name="totalToPay" value={totalToPay} />
                <input type="hidden" name="earnPoints" value={earnPoints} />
                <input type="hidden" name="cart" value={JSON.stringify(cartItems)} />
                <input type="hidden" name="user" value={JSON.stringify(user)} />

                <div className='flex w-full justify-between'>
                    <CartDetailRow title="Earn:" text={user ? `${earnPoints} points` : `Become a member to get ${earnPoints} points`} />
                </div>

                <CartDetailRow title="Total To Pay: " text={totalToPay + " SEK"} />

                <Input
                    input={{
                        type: "text",
                        name: "name",
                        title: "Name",
                        id: "name",
                    }}
                />

                <div className='flex flex-wrap justify-between gap-4 w-full'>
                    <Button onclick={clearCart}>
                        Clear cart
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
