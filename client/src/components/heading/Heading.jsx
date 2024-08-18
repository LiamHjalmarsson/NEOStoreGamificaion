import React from 'react';

const Heading = ({ title }) => {
    return (
        <h2 className='text-center text-2xl lg:text-2xl 2xl:text-4xl font-bold tracking-wider text-stone-800 dark:text-stone-200 mb-2 lg:mb-4 transition duration-300'>
            {title}
        </h2>
    );
}

export default Heading;
