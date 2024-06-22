import React from 'react';

const Image = ({ img, alt }) => {
    return (
        <div className='overflow-hidden h-full w-full'>
            <img src={img} className='object-cover object-center opacity-85 group-hover:opacity-90 w-full h-full group-hover:scale-110 transition duration-300' alt={alt ? alt : "no alt"} />
        </div>
    );
}

export default Image;
