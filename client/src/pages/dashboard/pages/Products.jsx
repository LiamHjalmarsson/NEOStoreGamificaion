import React from 'react';
import Heading from '../../../components/heading/Heading';
import { Form } from 'react-router-dom';
import Button from '../../../components/elements/Button';
import Input from '../../../components/elements/Input';
import { toast } from 'react-toastify';

export let addProductAction = async ({ request }) => {
    let formData = await request.formData();
    let data = Object.fromEntries(formData);

    try {
        let response = await fetch(`/api/product`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        let recourse = await response.json();

        toast.success("Product added successfully");
        return recourse;
    } catch (error) {
        return error
    }
}

const AuthProducts = () => {
    return (
        <div>
            <Heading title="Products" />

            <Form action='/dashboard/products' method='post' className='p-8 bg-stone-200 rounded-sm dark:bg-stone-800 flex flex-col gap-8 justify-center items-center w-96 mt-12   '>
                <Input input={{ id: "product name", name: "title" }} />
                <Input input={{ id: "brand", name: "brand" }} />
                <Input input={{ id: "price", name: "price", type: "number" }} />
                <Input input={{ id: "category", name: "category", }} />

                <Button type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default AuthProducts;
