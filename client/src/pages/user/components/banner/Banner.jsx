import React from 'react';
import Progress from './Progress';
import { useRootContext } from '../../../Root';

const Banner = () => {
    let { user } = useRootContext();

    return (
        <div className='relative h-[50vh] lg:h-[30vh] bg-gradient-to-l from-slate-400 via-slate-600 to-slate-800 flex justify-center items-center'>
            <div className='w-1/2 lg:absolute left-0'>
                <div className='max-w-md mx-auto text-stone-200'>
                    <h2 className='mb-2 font-semibold uppercase text-3xl tracking-widest'>
                        Welcome
                    </h2>
                    <h1 className='font-bold uppercase text-5xl tracking-widest'>
                        {user.firstName}
                    </h1>
                </div>
            </div>

            <Progress user={user} />
        </div>
    );
}

export default Banner;
