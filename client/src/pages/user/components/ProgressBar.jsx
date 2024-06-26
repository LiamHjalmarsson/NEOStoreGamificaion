import React from 'react';

const ProgressBar = ({ totalUserPoints, unlockNextRank }) => {
    let fillWidth = (totalUserPoints / unlockNextRank) * 100;

    return (
        <>
            <div className={`w-full h-8 bg-stone-800 dark:bg-stone-200 bg-opacity-80 rounded-md mt-2`}>
                <div className={`h-full bg-green-400 max-w-full rounded-md`} style={{ width: `${fillWidth}%` }}></div>
            </div>
            <div className='flex justify-between px-2 mt-0'>
                <div>
                    {totalUserPoints}
                </div>
                <div>
                    {unlockNextRank}
                </div>
            </div>
        </>
    );
}

export default ProgressBar;
