import React from 'react';
import { useRootContext } from '../../Root';
import { useParams } from 'react-router-dom';
import Image from './components/Image';
import Details from './components/Details';

const Product = () => {
    let { products } = useRootContext();
    let { id } = useParams();

    let product = products.find(product => product.title === id);

    return (
        <div className='min-h-[85vh] flex-col w-full flex justify-center items-center max-lg:px-10 pt-36'>
            <div className='flex flex-col md:flex-row group transition duration-500 max-w-5xl bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200 w-full h-fit justify-center items-center py-2 md:h-[40vh] gap-6 md:gap-12'>
                <Details product={product} />
                <Image image={product.image} />
            </div>
        </div >
    );
}

export default Product;
