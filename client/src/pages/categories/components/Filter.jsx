import React from 'react';
import { firstLetter } from '../../../utils/textTransformation';
import Button from '../../../components/elements/Button';

const Filter = ({ categories, filtering }) => {
    return (
        <div className='mx-auto max-w-7xl flex flex-wrap items-center justify-center gap-6 p-12'>
            {
                categories.map((category, index) => (
                    <Button key={index} onclick={() => filtering(category)}>
                        {firstLetter(category.title)}
                    </Button>
                ))
            }
        </div>
    );
}

export default Filter;
