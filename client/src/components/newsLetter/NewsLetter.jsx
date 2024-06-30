import React, { useState } from 'react';
import Input from '../elements/Input';
import Button from '../elements/Button';
import { customFetch } from '../../utils/customFetch';

const NewsLetter = () => {
    let [open, setOpen] = useState(false);

    let signUpHandler = async (e) => {
        e.preventDefault();

        let update = {
            partOfNewsLetter: true
        }

        let recourse = await customFetch("user/update-user", update, "PATCH");

        console.log(recourse);
    }

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
                    <form className='bg-slate-200 p-12 flex flex-col gap-6' onSubmit={signUpHandler}>
                        <Input input={{ id: "email", placeholder: "Enter email" }} />
                        <Button type="submit">
                            Sign up
                        </Button>
                    </form>
                </div>
            )}
        </>
    );
}

export default NewsLetter;
