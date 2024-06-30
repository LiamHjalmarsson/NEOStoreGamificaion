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
    toast.success("Product was added successfully");

    return recourse;
}

const AuthProducts = () => {
    let { products } = useRootContext();
    let [showForm, setShowForm] = useState(false);

    let showHandler = () => {
        setShowForm(!showForm);
    }

    return (
        <div className='relative'>
            {
                showForm && (
                    <div className=' absolute z-20 h-full w-full flex justify-center items-center'>
                        <Form action='/dashboard/products' method='post'>
                            <Input input={{ id: "product name", name: "title" }} />
                            <Input input={{ id: "brand", name: "brand" }} />
                            <Input input={{ id: "price", name: "price", type: "number" }} />
                            <Input input={{ id: "category", name: "category", }} />

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

            <Items items={products} />
        </div>
    );
}

export default AuthProducts;
