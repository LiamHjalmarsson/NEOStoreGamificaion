import React from 'react';
import Hero from './components/Hero';
import FeaturedCategories from './components/FeaturedCategories';
import NewsLetter from '../../components/newsLetter/NewsLetter';
import Headings from '../../components/heading/Headings';
import ProductsContainer from '../../components/product/Products';
import { useRootContext } from '../Root';

const Home = () => {
    let { products, user } = useRootContext();

    console.log(user);
    return (
        <div className='flex flex-col gap-24'>
            <Hero />

            <div className='px-4 md:px-12'>
                <Headings heading="Favorites" subHeading="The most bought" />
                <ProductsContainer products={products} />
            </div>

            <div>
                <FeaturedCategories />
                {!user.partOfNewsLetter && <NewsLetter />}
            </div>
        </div>
    );
}

export default Home;
