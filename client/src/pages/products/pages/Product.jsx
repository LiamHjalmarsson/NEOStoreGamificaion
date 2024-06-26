import React, { useState } from 'react';
import { useRootContext } from '../../Root';
import { useParams } from 'react-router-dom';
import Items from './components/Items';
import Image from './components/Image';
import Button from '../../../components/elements/Button';
import { useCartContext } from '../../../context/cartContext';

const Product = () => {
    let { products } = useRootContext();
    let { addToCart } = useCartContext();
    let { id } = useParams();

    let product = products.find(product => product.title === id);

    let [selectedSize, setSelectedSize] = useState("");
    let [selectedGender, setSelectedGender] = useState("");

    let handlerSizeSelection = (size) => {
        console.log(size);
        setSelectedSize(size);
    };

    let handlerGenderSelection = (gender) => {
        console.log(gender);
        setSelectedGender(gender);
    };

    return (
        <div className='min-h-[85vh] flex-col w-full flex justify-center items-center max-lg:px-10'>
            <div className='flex flex-col md:flex-row group transition duration-300 max-w-5xl bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200 rounded-md w-full justify-center items-center h-[70vh] md:h-[60vh] gap-6 md:gap-12'>
                <div className='flex-grow max-w-[420px] md:h-full p-8 flex flex-col gap-4 justify-evenly'>
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

                        <Items title="Sizes" items={product.size} selected={selectedSize} onclick={handlerSizeSelection} />
                        <Items title="Gender" items={product.gender} selected={selectedGender} onclick={handlerGenderSelection} />

                    </div>

                    <div className='w-full flex justify-end items-center'>
                        <Button
                            onclick={() => addToCart({
                                id: product._id,
                                title: product.title,
                                brand: product.brand,
                                price: product.price,
                                image: product.image,
                            })}
                            custom="w-full py-4 text-xl"
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
