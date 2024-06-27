import React from 'react';
import Heading from '../../../components/heading/Heading';
import Input from '../../../components/elements/Input';
import Form from '../../../components/form/Form';

export let addProductAction = async ({ request }) => {
    let data = customFetch("product", request);
    return data;
}

const AuthProducts = () => {
    return (
        <div>
            <Heading title="Products" />

            <Form action='/dashboard/products' method='post'>
                <Input input={{ id: "product name", name: "title" }} />
                <Input input={{ id: "brand", name: "brand" }} />
                <Input input={{ id: "price", name: "price", type: "number" }} />
                <Input input={{ id: "category", name: "category", }} />
            </Form>
        </div>
    );
}

export default AuthProducts;
