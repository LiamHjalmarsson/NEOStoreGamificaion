import React, { useState } from 'react';
import Input from '../../../components/elements/Input';
import { toast } from 'react-toastify';
import Form from '../../../components/form/Form';
import FileUpload from '../../../components/form/FileUpload';
import { customFetch } from '../../../utils/customFetch';
import { useRootContext } from '../../Root';
import Items from '../components/items/Items';
import AddButton from '../components/AddButton';
import Heading from '../../../components/heading/Heading';

export let addCategoryAction = async ({ request }) => {
    let recourse = await customFetch("category", request, "POST", true);

    if (recourse.error) {
        toast.error(recourse.error);
    } else {
        toast.success("Category added successfully");
    }

    return recourse;
}

const AuthCategories = () => {
    let { categories } = useRootContext();
    let [showForm, setShowForm] = useState(false);

    let showHandler = () => {
        setShowForm(!showForm);
    }

    return (
        <div className='relative grow lg:pr-12'>
            {
                showForm && (
                    <div className='fixed z-20 top-0 h-full w-full flex justify-center items-center px-4'>
                        <Form action='/dashboard/categories' method='post' enctype={true}>

                            <Heading title="Add category" />

                            <Input input={{ id: "category", name: "title" }} custom="w-full" />
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
                    </div>
                )
            }

            <AddButton showHandler={showHandler} show={showForm} />

            <Items items={categories} path="category" />
        </div>
    );
}

export default AuthCategories;