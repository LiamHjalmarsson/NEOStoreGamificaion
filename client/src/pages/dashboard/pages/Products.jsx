import React, { useState } from 'react';
import Input from '../../../components/elements/Input';
import Form from '../../../components/form/Form';
import FileUpload from '../../../components/form/FileUpload';
import { customFetch } from '../../../utils/customFetch';
import { toast } from 'react-toastify';
import { useRootContext } from '../../Root';
import Items from '../components/items/Items';
import AddButton from '../components/AddButton';
import Heading from '../../../components/heading/Heading';
import CategorySelect from '../components/categorySelect/CategorySelect';

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
                    <div className='fixed z-20 top-0 h-full w-full flex justify-center items-center px-4'>
                        <Form action='/dashboard/products' method='post'>
                            <Heading title="Add product" />

                            <Input input={{ id: "product name", name: "title" }} custom="w-full" />
                            <Input input={{ id: "brand", name: "brand" }} custom="w-full" />

                            <div className='flex gap-12 w-full max-w-md'>
                                <Input input={{ id: "price", name: "price", type: "number" }} />
                                <CategorySelect categories={categories} />
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
