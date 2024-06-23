import React from 'react';

const Image = ({ img, alt }) => {
    return (
        <div className='overflow-hidden'>
            <img src={img} className='object-cover object-center opacity-90 group-hover:opacity-80 group-hover:scale-110 transition duration-300' alt={alt ? alt : "no alt"} />
        </div>
    );
}

export default Image;
