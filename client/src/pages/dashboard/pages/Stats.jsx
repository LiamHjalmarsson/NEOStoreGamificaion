import React from 'react';
import { useDashboard } from '../Dashboard';
import Stat from '../components/Stat';

const Stats = () => {
    let { stats, orders } = useDashboard();

    let months = Array.from({ length: 12 }, (item, i) => new Date(0, i).toLocaleDateString("en-US", { month: 'long' }));

    let ordersPerMonth = months.map((month, index) => {
        return orders.filter(order => new Date(order.createdAt).getMonth() === index).length;
    });

    console.log(ordersPerMonth);

    let maxOrders = Math.max(...ordersPerMonth);

    return (
        <div className='w-full flex flex-col gap-12 pr-6'>
            <div className='flex flex-wrap gap-12 w-full mx-auto mt-12'>
                {
                    Object.entries(stats).map((stat, index) => (
                        <Stat key={index} stat={stat} />
                    ))
                }
            </div>

            <div className='p-8 bg-stone-200 dark:bg-stone-800 w-full flex flex-col grow rounded-2xl'>
                <div className='h-full grow flex justify-between w-full pt-8'>
                    {
                        months.map((month, index) => (
                            <div className='flex flex-col items-center justify-between gap-4' key={index}>
                                <div
                                    className={`h-full w-12 bg-rose-600`}
                                    style={{ height: `${(ordersPerMonth[index] / maxOrders) * 100}%` }}
                                ></div>
                                <p className='text-xl font-bold'> {month}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Stats;
