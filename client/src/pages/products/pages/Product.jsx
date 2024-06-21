import React from 'react';
import { useCategoryContext } from '../../Root';
import { useParams } from 'react-router-dom';

const Product = () => {
    let { products } = useCategoryContext();
    let { id } = useParams();

    let product = products.find(product => product.title === id);

    console.log(product);
    return (
        <div className='min-h-[85vh] flex-col w-full flex justify-center items-center max-lg:px-10'>
            <div className='flex flex-col md:flex-row group transition duration-300 max-w-5xl bg-stone-300 shadow shadow-primary dark:bg-primary rounded-md w-full justify-center items-center h-[70vh] md:h-[50vh] gap-6 md:gap-12'>
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
                        <>
                            <p>
                                Sizes
                            </p>
                            <ul className='flex flex-wrap w-full justify-between gap-12 mt-1'>
                                {
                                    product.size.map((size, i) => (
                                        <li className='p-2 border-stone-100 border-2 flex-grow text-center font-semibold'>
                                            {size}
                                        </li>
                                    ))
                                }
                            </ul>
                        </>
                    </div>
                </div>

                <div className='w-full md:w-1/2 scale-110 transition duration-300 relative h-full'>
                    <img src={product.image} className=' object-cover object-center absolute h-full w-full shadow shadow-primary' />
                </div>
            </div>
        </div >
    );
}

export default Product;
