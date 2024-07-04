import React from 'react';

const ChartBar = ({ month, value, max, isVertical }) => {
    let percentage = (value / max) * 100;
    let barStyle = isVertical ? { height: `${percentage}%` } : { width: `${percentage}%` };

    return (
        <div className={`flex ${isVertical ? 'flex-col items-center' : 'flex-row-reverse items-center'} justify-end gap-2 md:gap-4 w-full`}>
            <div className={`${isVertical ? 'w-8' : 'h-8'} bg-rose-600`} style={barStyle}></div>
            <p className='text-sm md:text-xl font-bold '>{month}</p>
        </div>
    );
};

export default ChartBar;