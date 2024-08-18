import React from 'react';
import Button from '../../../../components/elements/Button';
import { firstLetter } from '../../../../utils/textTransformation';
import { useCartContext } from '../../../../context/cartContext';

const Details = ({ product }) => {
    let { addToCart } = useCartContext();

    return (
        <div className=' max-w-[420px] flex-grow md:h-full p-4 lg:p-8 flex flex-col gap-4 justify-evenly max-lg:text-center'>
            <h2 className='text-3xl lg:text-5xl font-bold mb-4 text-rose-600'>
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
                    custom="w-full py-4 text-xl bg-rose-600 text-stone-200 border-0 hover:bg-rose-500 dark:hover-rose-500"
                >
                    Add to cart
                </Button>
            </div>
        </div>
    );
}

export default Details;
