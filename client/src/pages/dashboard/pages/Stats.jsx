import React from 'react';
import { useDashboard } from '../Dashboard';
import Stat from '../components/Stat';
import Chart from '../components/stats/Chart';

const Stats = () => {
    let { stats, orders } = useDashboard();

    let months = Array.from({ length: 12 }, (item, i) => new Date(0, i).toLocaleDateString("en-US", { month: 'short' }));

    let ordersPerMonth = months.map((month, index) => {
        return orders.filter(order => new Date(order.createdAt).getMonth() === index).length;
    });

    let maxOrders = Math.max(...ordersPerMonth);

    return (
        <div className='w-full flex flex-col gap-6 p-4 md:px-6 md:pt-12'>
            <div className='flex flex-wrap gap-6 w-full justify-center'>
                {
                    Object.entries(stats).map((stat, index) => (
                        <Stat key={index} stat={stat} />
                    ))
                }
            </div>
            <Chart months={months} ordersPerMonth={ordersPerMonth} maxOrders={maxOrders} />
        </div>
    );

}

export default Stats;
