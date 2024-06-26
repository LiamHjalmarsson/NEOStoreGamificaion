import React from 'react';
import { useCartContext } from '../../context/cartContext';
import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Image from '../elements/Image';

const ProductCard = ({ product }) => {
    let { addToCart } = useCartContext();

    return (
        <div className='relative min-w-56 mx-auto flex flex-col justify-center items-center group w-full max-w-96'>
            <div className='absolute -top-4 bg-stone-200 z-10 dark:bg-stone-800 p-4 text-lg font-semibold bg-opacity-80 tracking-wide'>
                {product.title}
            </div>
            <div className='shadow-md'>
                <Link to={"/products/" + product.title}>
                    <Image img={product.image} />
                </Link>
                <div className='group bg-stone-200 dark:bg-stone-800 w-full  py-4 px-8 bg-opacity-80'>
                    <p className='text-sm mb-2'>
                        Place rating later
                    </p>
                    <div className='flex'>
                        <p className='font-semibold flex-grow'>
                            ${product.price} SEK
                        </p>
                        <FaCartPlus className='transition duration-300 cursor-pointer hover:scale-110 text-xl' onClick={() => addToCart(product)} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
