import React from 'react';

const Headings = ({ heading, subHeading }) => {
    return (
        <div className='mx-auto w-fit text-center max-md:mb-6 mb-8'>
            <h3 className='lg:mb-2 tracking-wider text-lg 2xl:text-xl font-semibold'>
                {subHeading}
            </h3>
            <h2 className='text-3xl md:text-4xl 2xl:text-5xl font-bold tracking-wider text-rose-600'>
                {heading}
            </h2>
        </div>
    );
}

export default Headings;
