import React from 'react';
import Heading from '../../../components/heading/Heading';
import Input from '../../../components/elements/Input';
import Form from '../../../components/form/Form';
import FileUpload from '../../../components/form/FileUpload';
import { customFetch } from '../../../utils/customFetch';
import { toast } from 'react-toastify';
import { useRootContext } from '../../Root';

export let addProductAction = async ({ request }) => {
    let recourse = await customFetch("product", request);

    toast.success("Product was added successfully");

    return recourse;
}

const AuthProducts = () => {
    let { products } = useRootContext();

    return (
        <div>
            <Heading title="Products" />

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
    );
}

export default AuthProducts;
