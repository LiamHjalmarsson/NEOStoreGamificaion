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
        <div className={`absolute inset-0 z-20 transition-opacity ${open ? "opacity-100" : "opacity-0 pointer-events-none"} transition duration-500`}>
            <div className={`${open ? "translate-y-0" : "-translate-y-full"} max-w-xl px-4 w-full mx-auto fixed top-28 lg:top-44 left-0 right-0 transition-transform duration-500 `}>
                <label htmlFor="search" className="">
                    <div className="relative flex justify-center items-center z-30">
                        <div className=' absolute right-0 p-6 bg-stone-200 dark:bg-stone-800 bg-opacity-50 shadow h-full duration-500 transition-colors'>
                            <FaSearch className='text-xl' />
                        </div>
                        <input
                            type="search"
                            id="search"
                            className="block w-full p-6 lg:pl-12 pr-36 bg-stone-100 dark:bg-stone-700 shadow-md rounded-md outline-none transition duration-500 shadow-stone-800"
                            placeholder="Search for products..."
                            onChange={searchHandler}
                        />
                    </div>
                </label>
            </div>

            <div className={`${searchValue.length > 0 ? "visible" : "invisible"} max-w-xl flex flex-col gap-4 w-full mx-auto fixed top-60 lg:top-72 left-0 right-0 transition duration-500 bg-stone-100 shadow shadow-stone-300 dark:shadow-stone-800 dark:bg-stone-700 p-4 rounded-md`}>
                {searchValue.map((item, index) => (
                    <SearchItem key={index} item={item} />
                ))}
            </div>

        </div >
    );
}

export default Search;
