import React, { useState } from 'react';
import Input from '../elements/Input';
import Form from '../form/Form';
import Gifts from './Gifts';
import { useRootContext } from '../../pages/Root';
import { redirect, useActionData } from 'react-router-dom';

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
            <div className='relative w-full p-12 flex justify-center items-center h-[500px] bg-rose-500'>
                <img src='/placeholder.png' className='w-full h-full object-cover absolute opacity-40' />
                <div className='p-6 relative z-10 text-center'>
                    <h3 className='text-3xl text-stone-200 font-semibold mb-2'>
                        Join our newsletter
                    </h3>
                    <h2 className='text-4xl text-stone-200 font-bold mb-6'>
                        To get a gift
                    </h2>

                    <button className='text-stone-200 border-2 border-stone-200 px-6 py-2' onClick={() => setOpen(!open)}>
                        Sign up
                    </button>
                </div>
            </div>

            {open && (
                <div className='fixed bottom-0 -left-0 h-full w-full bg-stone-800 z-20 bg-opacity-70 flex justify-center items-center'>
                    <Form action="" method="post" className='bg-slate-200 p-12 flex flex-col gap-6'>
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
                        <Input input={{ id: "email", placeholder: "Enter email" }} custom="" />
                    </Form>
                </div>
            )}
        </>
    );
}

export default NewsLetter;
