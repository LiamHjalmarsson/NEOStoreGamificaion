import React from 'react';
import { useCategoryContext } from '../../Root';
import { useParams } from 'react-router-dom';
import Items from './components/Items';
import Image from './components/Image';
import Button from '../../../components/elements/Button';
import { useCartContext } from '../../../context/cartContext';

const Product = () => {
    let { products } = useCategoryContext();
    let { addToCart } = useCartContext();
    let { id } = useParams();

    let product = products.find(product => product.title === id);

    return (
        <div className='min-h-[85vh] flex-col w-full flex justify-center items-center max-lg:px-10'>
            <div className='flex flex-col md:flex-row group transition duration-300 max-w-5xl bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200 shadow shadow-primary dark:bg-primary rounded-md w-full justify-center items-center h-[70vh] md:h-[50vh] gap-6 md:gap-12'>
                <div className='flex-grow max-w-[420px] md:h-full py-8 px-8 flex flex-col gap-4 justify-evenly'>
                    <div className='flex flex-col gap-4 text-xl'>
                        <h2 className='text-3xl font-semibold mb-4'>
                            {product.title}
                        </h2>
                        <p>
                            {
                                "Brand: " + product.brand
                            }
                        </p>
                        <p>
                            {
                                "Price: $" + product.price
                            }
                        </p>
                        <p>
                            {
                                "Category: " + product.category
                            }
                        </p>

                        <Items title="Sizes" items={product.size} />
                        <Items title="Gender" items={product.gender} />
                    </div>

                    <div className='w-full flex justify-end items-center'>
                        <Button onclick={() => addToCart({
                            id: product._id,
                            title: product.title,
                            brand: product.brand,
                            price: product.price,
                            image: product.image,
                        })}>
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
