import React from 'react';
import Navigation from '../components/navigation';
import Heading from '../../../components/heading/Heading';
import { useUserContext } from '../User';
import Order from '../components/order/Order';

const Orders = () => {
    let { purchase } = useUserContext();
    
    return (
        <div className='pt-32 flex flex-col gap-6'>
            <Heading title="Orders" />

            <Navigation />

            <div className='flex flex-col gap-6 lg:gap-12 mx-auto max-w-3xl w-full px-4'>
                {purchase.map((item, index) => (
                    <Order order={item} key={index}/>
                ))}
            </div>
        </div>
    );
}

export default Orders;
