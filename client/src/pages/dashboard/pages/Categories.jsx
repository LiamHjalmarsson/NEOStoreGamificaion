import React from 'react';
import Heading from '../../../components/heading/Heading';
import Input from '../../../components/elements/Input';
import { toast } from 'react-toastify';
import Form from '../../../components/form/Form';
import { customFetch } from '../../../utils/customFetch';

export let addCategoryAction = async ({ request }) => {
    let data = customFetch("category", request);
    toast.success("Category added successfully");
    return data;
}

const AuthCategories = () => {
    return (
        <div>
            <Heading title="Categories" />

            <Form action='/dashboard/categories' method='post'>
                <Input input={{ id: "category", name: "title" }} />
            </Form>
        </div>
    );
}

export default AuthCategories;
