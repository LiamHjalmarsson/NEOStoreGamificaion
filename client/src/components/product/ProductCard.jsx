import React from 'react';
import Detail from './Detail';
import Image from './Image';

const ProductCard = ({ product }) => {
    return (
        <div className='relative min-w-sm max-w-xl mx-auto flex flex-col justify-center items-center w-full shadow-md'>
            <Image product={product} />
            <Detail product={product} />
        </div>
    );
}

export default ProductCard;
