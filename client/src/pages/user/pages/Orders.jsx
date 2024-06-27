import React from 'react';
import Navigation from '../components/navigation';
import Heading from '../../../components/heading/Heading';
import { FaArrowDown } from 'react-icons/fa';

const Orders = () => {
    return (
        <div className='pt-12 flex flex-col gap-6'>
            <Heading title="Orders" />

            <Navigation />

            <div className='flex flex-col gap-12 mx-auto max-w-3xl w-full mt-12'>
                <div className='bg-stone-200 p-6 flex justify-between items-center'>
                    <h3 className='font-semibold text-xl'>
                        Order Purchase 2023/01/01
                    </h3>
                    <div className='flex items-center gap-6'>
                        <span>Items: </span>
                        <span className='font-semibold'>10</span>
                        <span className='p-2 bg-stone-300 round-sm'>
                            <FaArrowDown className='' />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Orders;
