import React from 'react';
import { useRootContext } from '../Root';
import Hero from './components/Hero';
import FeaturedCategories from './components/FeaturedCategories';
import FeaturedProducts from './components/FeaturedProducts';
import NewsLetter from '../../components/newsLetter/NewsLetter';

const Home = () => {
    let { products } = useRootContext();

    let menProducts = products?.filter(item => item.gender.includes("male"))[0];
    let womanProducts = products?.filter(item => item.gender.includes("female"))[0];

    return (
        <div className='flex flex-col gap-24'>
            <Hero men={menProducts} woman={womanProducts} />
            <FeaturedProducts />

            <div>
                <FeaturedCategories />
                <NewsLetter />
            </div>
        </div>
    );
}

export default Home;
