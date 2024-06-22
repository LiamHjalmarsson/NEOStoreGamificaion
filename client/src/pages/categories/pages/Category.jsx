import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useRootContext } from '../../Root';

const Category = () => {
    let { id } = useParams();
    let { categories, products } = useRootContext();

    let category = categories.find(category => category.title === id);

    let categoryProducts = products.filter(product => product.category === category.title);

    console.log(id);
    return (
        <section>
            <div className='relative flex justify-center items-end pt-12'>
                <div className='text-center relative z-10 bg-stone-100 p-6 bg-opacity-80 rounded-md'>
                    <h2 className='text-3xl font-bold tracking-wider uppercase'>
                        {category.title}
                    </h2>
                    <p className='mt-2 leading-relaxed'>
                        Amount of products for this category {category.itemCount}
                    </p>
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 mx-auto p-6 lg:p-12 max-w-8xl gap-2 md:gap-6 lg:gap-12'>
                {categoryProducts.map((product, index) => (
                    <Link to={"/categories/" + id + "/" + product.title} key={index} className='p-4 lg:p-6 relative group'>
                        <div className='overflow-hidden '>
                            <img src={product.image} className='object-contain object-center group-hover:scale-125 transition duration-300 group-hover:opacity-80' />
                        </div>
                        <div className=' absolute top-0 left-2 bg-stone-200 text-stone-800 dark:bg-stone-800 dark:text-stone-200 p-4 font-semibold bg-opacity-80 shadow-md shadow-stone-800'>
                            {product.title}
                        </div>
                        <div className=' absolute bottom-0 right-2 bg-stone-200 text-stone-800 dark:bg-stone-800 dark:text-stone-200 p-4 font-bold bg-opacity-80 shadow-md tracking-widest shadow-stone-800'>
                            Sek {product.price}
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default Category;
