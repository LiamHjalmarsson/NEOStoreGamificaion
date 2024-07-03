import React, { useState } from 'react';
import Input from '../../../components/elements/Input';
import Form from '../../../components/form/Form';
import FileUpload from '../../../components/form/FileUpload';
import { customFetch } from '../../../utils/customFetch';
import { toast } from 'react-toastify';
import { useRootContext } from '../../Root';
import Items from '../components/items/Items';
import AddButton from '../components/AddButton';

export let addProductAction = async ({ request }) => {
    let recourse = await customFetch("product", request, "POST", true);

    if (recourse.error) {
        toast.error(recourse.error);
    } else {
        toast.success("Product added successfully");
    }

    return recourse;
}

const AuthProducts = () => {
    let { products, categories } = useRootContext();
    let [showForm, setShowForm] = useState(false);
    
    let showHandler = () => {
        setShowForm(!showForm);
    }

    return (
        <div className='relative grow lg:pr-12'>
            {
                showForm && (
                    <div className=' absolute z-20 h-full w-full flex justify-center items-center'>
                        <Form action='/dashboard/products' method='post'>
                            <Input input={{ id: "product name", name: "title" }} custom="w-full" />
                            <Input input={{ id: "brand", name: "brand" }} custom="w-full" />

                            <div className='flex gap-12 w-full'>
                                <Input input={{ id: "price", name: "price", type: "number" }} />
                                <div className='flex flex-col relative text-stone-800 w-full'>
                                    <label for="category" className='absolute -top-4 left-4 bg-stone-200 dark:bg-stone-800 px-2 text-stone-200'>
                                        Category
                                    </label>
                                    <select name="category" className='rounded-md border-2 border-stone-200 bg-transparent text-stone-200 px-3 py-2 outline-none '>
                                        {categories.map((category) => (
                                            <option value={category._id} name="category" key={category._id}>
                                                {category.title}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <FileUpload
                                input={{
                                    type: 'file',
                                    id: 'image',
                                    name: 'image',
                                    accept: 'image/*',
                                }}
                                text="Upload product image"
                            />
                        </Form>
                    </div>
                )
            }

            <AddButton showHandler={showHandler} show={showForm} />

            <Items items={products} path="product" />
        </div>
    );
}

export default AuthProducts;
