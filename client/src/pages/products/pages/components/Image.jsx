import React from 'react';

const Image = ({ image }) => {
    return (
        <div className='w-full md:w-1/2 scale-110 transition duration-500 relative h-full min-h-52'>
            <img src={image} className=' object-cover object-center absolute h-full w-full shadow-lg shadow-stone-800' />
        </div>
    );
}

export default Image;
