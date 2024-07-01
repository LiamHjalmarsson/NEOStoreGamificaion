import React from 'react';
import HeroItem from './HeroItem';
import { useRootContext } from '../../Root';

const Hero = () => {
    let { products } = useRootContext();
    return (
        <div className="relative h-[100vh] md:h-[60vh]">
            <div className='w-full h-full absolute top-0 left-0 flex max-md:flex-col'>
                <HeroItem item={products[0]} />
                <HeroItem item={products[0]} />
            </div>
        </div>
    );
}

export default Hero;
