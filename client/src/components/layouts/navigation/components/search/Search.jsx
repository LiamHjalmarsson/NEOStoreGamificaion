import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { useRootContext } from '../../../../../pages/Root';
import SearchItem from './components/SearchItem';

const Search = ({ open, setSearch, searchValue }) => {
    let { products } = useRootContext();

    let searchHandler = (e) => {
        if (e.target.value === "") {
            setSearch([]);
        } else {
            let items = products.filter(item => item.title.includes(e.target.value));
            setSearch(items);
        }
    }

    return (
        <div className={`absolute inset-0 z-20 transition-opacity ${open ? "opacity-100" : "opacity-0 pointer-events-none"} transition duration-300`}>
            <div className={`${open ? "translate-y-0" : "-translate-y-full"} max-w-xl w-full mx-auto fixed top-36 left-0 right-0 transition-transform duration-300 `}>
                <label htmlFor="search" className="mb-2 text-sm font-medium sr-only">
                    Search
                </label>

                <div className="relative flex justify-center items-center z-30">
                    <div className=' absolute right-12'>
                        <FaSearch />
                    </div>
                    <input
                        type="search"
                        id="search"
                        className="block w-full p-6 pl-12 pr-36 bg-stone-200 shadow shadow-stone-200 dark:bg-stone-800 rounded-md outline-none transition duration-300"
                        placeholder="Search for products..."
                        onChange={searchHandler}
                    />
                </div>
            </div>

            <div className={`${searchValue.length > 0 ? "visible" : "invisible"} max-w-xl flex flex-col gap-4 w-full mx-auto fixed top-60 left-0 right-0 transition duration-300 bg-stone-200 dark:bg-stone-800 p-4 rounded-md`}>
                {searchValue.map((item, index) => (
                    <SearchItem key={index} item={item} />
                ))}
            </div>

        </div>
    );
}

export default Search;
