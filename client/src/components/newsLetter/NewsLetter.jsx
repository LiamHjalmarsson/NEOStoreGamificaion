import React, { useEffect, useState } from 'react';
import Input from '../elements/Input';
import Form from '../form/Form';
import Gifts from './Gifts';
import { useRootContext } from '../../pages/Root';
import { redirect, useActionData } from 'react-router-dom';
import Button from '../elements/Button';
import { FaX } from 'react-icons/fa6';

export const newsLetterAction = async ({ request }) => {
    let formData = await request.formData();
    let discount = formData.get("discount");
    let user = JSON.parse(formData.get("user"));

    if (!user) {

    } else {
        await fetch(`/api/user/update-user`, {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                partOfNewsLetter: true,
                discounts: [...user.discounts, discount],
                achievements: [...user.achievements, "66833a96b7df31f5d3fb7a82"]
            })
        });
    }

    return discount;
}

const NewsLetter = () => {
    let { user } = useRootContext();
    let data = useActionData();
    let [open, setOpen] = useState(false);

    return (
        <>
            <div className='relative w-full h-[500px] flex flex-col justify-center items-center bg-stone-800 dark:bg-opacity-40'>
                <video src='/keyboard.mp4' className='absolute top-0 left-0 w-full h-full object-cover opacity-50' autoPlay loop muted />
                <div className='p-6 absolute z-20 text-center'>
                    <h3 className='text-3xl text-stone-200 font-semibold mb-2'>
                        Join our newsletter
                    </h3>
                    <h2 className='text-4xl text-stone-200 font-bold mb-6'>
                        To get a gift
                    </h2>

                    <Button onclick={() => setOpen(!open)} custom="border-2 border-rose-600 text-rose-600 hover:text-stone-200 hover:bg-rose-600">
                        Sign up
                    </Button>
                </div>
            </div>

            {open && (
                <>
                    <div className='fixed bottom-0 z-30 -left-0 h-full w-full flex justify-center items-center'>
                        <Form action="" method="post">
                            <div className='flex w-full cursor-pointer' onClick={() => setOpen(false)}>
                                <FaX size={24} />
                            </div>
                            <div className='text-center'>
                                <h3 className='text-3xl font-semibold mb-2'>
                                    Join our newsletter
                                </h3>
                                <p className='text-lg tracking-wide font-semibold text-rose-600'>
                                    Chose a mystery gift to get when you sign up!
                                </p>
                            </div>

                            <Gifts />

                            <input type="hidden" name="user" value={JSON.stringify(user)} />

                            {
                                data && <p className='font-bold text-lg text-rose-600'> YOUR CODE {data} </p>
                            }
                            <Input input={{ id: "email", placeholder: "Enter email" }} custom="w-full" />
                        </Form>
                    </div>
                </>
            )}
        </>
    );
}

export default NewsLetter;
