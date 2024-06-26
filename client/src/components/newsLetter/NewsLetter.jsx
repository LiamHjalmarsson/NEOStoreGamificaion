import React from 'react';

const NewsLetter = () => {
    return (
        <div className='relative w-full p-12 flex justify-center items-center h-[500px] bg-stone-800'>
            <img src='/placeholder.png' className='w-full h-full object-cover absolute opacity-30' />
            <div className='p-6 relative z-10 text-center'>
                <h3 className='text-3xl text-stone-200 font-semibold mb-2'>
                    Join our newsletter
                </h3>
                <h2 className='text-4xl text-stone-200 font-bold mb-6'>
                    To get a gift
                </h2>

                <button className='text-stone-200 border-2 border-stone-200 px-6 py-2'>
                    Sign up
                </button>
            </div>
        </div>
    );
}

export default NewsLetter;
