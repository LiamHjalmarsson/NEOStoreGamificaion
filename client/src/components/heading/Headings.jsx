import React from 'react';

const Headings = ({ heading, subHeading }) => {
    return (
        <div className='mx-auto w-fit text-center max-md:mb-6'>
            <h3 className='mb-2 tracking-wider text-sm lg:text-base 2xl:text-lg font-semibold'>
                {subHeading}
            </h3>
            <h2 className='text-lg lg:text-2xl 2xl:text-4xl font-bold tracking-wider'>
                {heading}
            </h2>
        </div>
    );
}

export default Headings;
