import React, { useState } from 'react';
import { useRootContext } from '../../Root';
import { useParams } from 'react-router-dom';
import Image from './components/Image';
import Button from '../../../components/elements/Button';
import { useCartContext } from '../../../context/cartContext';
import { firstLetter } from '../../../utils/textTransformation';

const Product = () => {
    let { products } = useRootContext();
    let { addToCart } = useCartContext();
    let { id } = useParams();

    let product = products.find(product => product.title === id);

    return (
        <div className='min-h-[85vh] flex-col w-full flex justify-center items-center max-lg:px-10 py-12'>
            <div className='flex flex-col md:flex-row group transition duration-500 max-w-5xl bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200 w-full justify-center items-center md:h-[40vh] gap-6 md:gap-12'>
                <div className=' max-w-[420px] flex-grow md:h-full p-8 flex flex-col gap-4 justify-evenly max-lg:text-center'>
                    <h2 className='text-4xl lg:text-5xl font-bold mb-4 text-rose-600'>
                        {firstLetter(product.title)}
                    </h2>

                    <div>
                        <h3 className='text-lg lg:text-xl font-semibold mb-4'>
                            {
                                "Price: " + product.price + " SEK"
                            }
                        </h3>
                        <p className='leading-relaxed mb-4'>
                            {product.description}
                        </p>
                    </div>

                    <div>
                        <Button
                            onclick={() => addToCart({
                                id: product._id,
                                title: product.title,
                                brand: product.brand,
                                price: product.price,
                                image: product.image,
                            })}
                            custom="w-full py-4 text-xl border-rose-600 text-rose-600 hover:text-stone-200 hover:bg-rose-600"
                        >
                            Add to cart
                        </Button>
                    </div>
                </div>

                <Image image={product.image} />
            </div>
        </div >
    );
}

export default Product;
