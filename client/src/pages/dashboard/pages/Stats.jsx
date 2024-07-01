import React from 'react';
import { useDashboard } from '../Dashboard';
import Stat from '../components/Stat';

const Stats = () => {
    let { stats, orders } = useDashboard();

    let months = Array.from({ length: 12 }, (item, i) => new Date(0, i).toLocaleDateString("en-US", { month: 'short' }));

    let ordersPerMonth = months.map((month, index) => {
        return orders.filter(order => new Date(order.createdAt).getMonth() === index).length;
    });

    let maxOrders = Math.max(...ordersPerMonth);

    return (
        <div className='w-full flex flex-col gap-6 p-4 md:p-6'>
            <div className='flex flex-wrap gap-6 w-full justify-center'>
                {
                    Object.entries(stats).map((stat, index) => (
                        <Stat key={index} stat={stat} />
                    ))
                }
            </div>

            <div className='p-4 md:p-8 bg-stone-200 dark:bg-stone-800 w-full flex flex-col grow rounded-2xl'>
                <div className='h-full grow hidden lg:flex justify-between w-full pt-4 md:pt-8 gap-4 min-h-96'>
                    {
                        months.map((month, index) => (
                            <div className='flex flex-col items-center justify-end gap-2 md:gap-4 w-full' key={index}>
                                <div className={`w-8 bg-rose-600`} style={{ height: `${(ordersPerMonth[index] / maxOrders) * 100}%` }}></div>
                                <p className='text-sm md:text-xl font-bold'>{month}</p>
                            </div>
                        ))
                    }
                </div>

                    <div className='h-full grow flex lg:hidden flex-col justify-between w-full pt-4 md:pt-8 gap-4 min-h-96'>
                        {
                            months.map((month, index) => (
                                <div className='flex flex-row-reverse items-center justify-end gap-4 md:gap-4 w-full' key={index}>
                                    <div className={`h-8 bg-rose-600`} style={{ width: `${(ordersPerMonth[index] / maxOrders) * 100}%` }}></div>
                                    <p className='text-sm md:text-xl font-bold'>{month}</p>
                                </div>
                            ))
                        }
                    </div>
            </div>
        </div>
    );
}

export default Stats;
