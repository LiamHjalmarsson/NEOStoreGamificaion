import React, { useState } from 'react';
import Heading from '../../../components/heading/Heading';
import Input from '../../../components/elements/Input';
import { toast } from 'react-toastify';
import Form from '../../../components/form/Form';
import FileUpload from '../../../components/form/FileUpload';
import { customFetch } from '../../../utils/customFetch';
import { useRootContext } from '../../Root';
import CategoryCard from '../../../components/category/CategoryCard';
import { FaPen, FaTrash } from 'react-icons/fa';

export let addCategoryAction = async ({ request }) => {
    let recourse = await customFetch("category", request);
    toast.success("Category added successfully");

    return recourse;
}

const AuthCategories = () => {
    let { categories, products } = useRootContext();
    let [edithItem, setEdithItem] = useState(null);

    let deleteCategory = async ({ _id }) => {
        try {
            let response = await fetch(`/api/category/${_id}`, {
                method: 'DELETE',
            });
            let recourse = await response.json();

            toast.deleted("ss");
        } catch (error) {
            toast.error(error);
        }
    }

    console.log(categories);

    return (
        <div className='relative flex justify-center items-center flex-col'>
            <Heading title="Categories" />

            <Form action='/dashboard/categories' method='post' enctype={true}>
                <Input input={{ id: "category", name: "title" }} />
                <FileUpload
                    input={{
                        type: 'file',
                        id: 'image',
                        name: 'image',
                        accept: 'image/*',
                    }}
                    text="Upload category image"
                />
            </Form>

            <div className={`grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 xl:gap-12 grid justify-center items-center px-6 xl:px-12 pb-12 mt-24`}>
                {categories.map((category, index) => (
                    <div key={index} className='relative'>
                        <div className='absolute top-2 right-2 p-4 z-10 rounded-full bg-blue-400 text-stone-200' onClick={() => setEdithItem(category)}>
                            <FaPen />
                        </div>
                        <div className='absolute top-2 left-2 p-4 z-10 rounded-full bg-red-400 text-stone-200' onClick={() => deleteCategory(category)}>
                            <FaTrash />
                        </div>
                        <CategoryCard category={category} />
                    </div>
                ))}
            </div>

            <div className={`${edithItem ? "opacity-100" : "opacity-0 -z-20"} p-6 bg-stone-300 absolute transition duration-500 z-20`}>
                <div>
                    <img src={edithItem?.image} className='object-contain object-center h-[500px]' alt={"no alt"} />
                </div>
                <div className='flex flex-wrap gap-6 items-center justify-center'>

                </div>
            </div>
        </div>
    );
}

export default AuthCategories;
