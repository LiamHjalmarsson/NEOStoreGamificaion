import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import Icon from '../icons/Icon';
import Button from '../../../../elements/Button';
import { useRootContext } from '../../../../../pages/Root';
import Image from '../../../../elements/Image';
import { Link } from 'react-router-dom';

const Search = ({ open, onClose }) => {
    let { products } = useRootContext();
    let [search, setSearch] = useState([]);

    let searchHandler = (e) => {
        let items = products.filter(item => item.title.includes(e.target.value));
        setSearch(items);
    }

    return (
        <div className={`absolute inset-0 z-20 transition-opacity ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <div className={`${open ? "translate-y-0" : "-translate-y-full"} max-w-3xl w-full mx-auto fixed top-40 left-0 right-0 transition-transform duration-300 bg-stone-200 dark:bg-stone-800 p-2 rounded-md`}>
                <label htmlFor="search" className="mb-2 text-sm font-medium sr-only">
                    Search
                </label>
                <div className="relative flex justify-center items-center">
                    <Icon custom="absolute top-3 left-3 text-stone-400">
                        <FaSearch />
                    </Icon>
                    <input
                        type="search"
                        id="search"
                        className="block w-full p-6 pl-12 pr-36 bg-stone-200 dark:bg-stone-800 border border-stone-700 rounded-md text-stone-800 dark:text-stone-200 outline-none"
                        placeholder="Search for products..."
                        onChange={searchHandler}
                    />
                    <Button
                        custom="absolute right-4"
                    >
                        Search
                    </Button>
                </div>
            </div>
            <div className={`${search ? "translate-y-0 visible" : "-translate-y-full invisible"} max-w-3xl w-full mx-auto fixed top-64 left-0 right-0 transition-transform duration-300 bg-stone-200 dark:bg-stone-800 p-4 rounded-md`}>
                {search.map((item, index) => (
                    <Link to={`/products/${item.title}`} className='p-4 w-full flex items-center gap-12 border border-stone-300 dark:border-stone-700 mt-6' key={index}>
                        <div className='flex-grow flex justify-between pr-12'>
                            <span>
                                {item.title}
                            </span>
                            <span>
                                {item.price} SEK
                            </span>
                        </div>
                        <div className='w-14'>
                            <Image img={item.image} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Search;
