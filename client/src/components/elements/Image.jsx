import React from 'react';

const Image = ({ img, alt }) => {
    return <img src={img} className='object-cover object-center opacity-85 hover:opacity-90 w-full h-full hover:scale-110 transition duration-300' alt={alt ? alt : "no alt"} />;
}

export default Image;
