import React from 'react';
import { useDashboard } from '../Dashboard';
import { FaUser } from 'react-icons/fa';

const AuthUsers = () => {
    let { users } = useDashboard()

    return (
            <div className='flex flex-wrap gap-12 max-w-4xl w-full mx-auto'>
                {
                    users.map((user, index) => (
                        <div key={index} className='bg-stone-200 max-w-96 relative rounded-sm shadow min-w-48 dark:bg-stone-800 p-4 grow text-center h-48 flex justify-between items-center flex-col transition duration-300'>
                            <div className='uppercase font-semibold tracking-wider'>
                                <p>
                                    {user.firstName}
                                </p>
                            </div>
                            <FaUser className='text-4xl' />
                            <p className='text-2xl font-semibold'>
                                {user.lastName}
                            </p>
                        </div>
                    ))
                }
            </div>
    );
}

export default AuthUsers;
