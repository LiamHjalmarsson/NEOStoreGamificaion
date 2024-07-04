import React from 'react';
import ChartBar from './ChartBar';

const Chart = ({ months, ordersPerMonth, maxOrders }) => {
    return (
        <>
            <div className='p-4 md:px-8 bg-stone-200 dark:bg-stone-800 w-full flex flex-col grow rounded-2xl transition-colors duration-500'>
                <div className='h-full grow hidden lg:flex justify-between w-full pt-4 md:pt-8 gap-4 min-h-96'>
                    {months.map((month, index) => (
                        <ChartBar key={index} month={month} value={ordersPerMonth[index]} max={maxOrders} isVertical={true} />
                    ))}
                </div>
                <div className='h-full grow flex lg:hidden flex-col justify-between w-full pt-4 md:pt-8 gap-4 min-h-96'>
                    {months.map((month, index) => (
                        <ChartBar key={index} month={month} value={ordersPerMonth[index]} max={maxOrders} isVertical={false} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Chart;