import React from 'react';
import Detail from './Detail';
import Image from './Image';

const ProductCard = ({ product }) => {
    return (
        <div className='relative min-w-56 mx-auto flex flex-col justify-center items-center max-w-lg w-full shadow-md'>
            <Image product={product} />
            <Detail product={product} />
        </div>
    );
}

export default ProductCard;
