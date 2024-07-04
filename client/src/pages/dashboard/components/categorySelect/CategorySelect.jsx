import React from 'react';

const CategorySelect = ({ categories }) => {
    return (
        <div className='flex flex-col relative w-full'>
            <label htmlFor="category" className='absolute -top-4 left-4 bg-stone-200 border-stone-800 dark:bg-stone-700 px-2 duration-500 transition'>
                Category
            </label>
            <select name="category" className='rounded-md border-2 border-stone-800 dark:border-stone-200 bg-transparent px-3 py-2 outline-none duration-500 transition'>
                {categories.map((category) => (
                    <option value={category._id} name="category" key={category._id} className='bg-stone-200 dark:bg-stone-800 outline-none'>
                        {category.title}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CategorySelect;
