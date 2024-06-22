import React from 'react';

const Image = ({ image }) => {
    return (
        <div className='w-full md:w-1/2 scale-110 transition duration-300 relative h-full'>
            <img src={image} className=' object-cover object-center absolute h-full w-full shadow shadow-primary' />
        </div>
    );
}

export default Image;
