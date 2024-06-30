import React from 'react';
import { useDashboard } from '../Dashboard';
import { FaUser } from 'react-icons/fa';

const AuthUsers = () => {
    let { users } = useDashboard()

    return (
        <div className='flex flex-wrap gap-12 max-w-4xl w-full mx-auto'>
            {
                users.map((user, index) => (
                    <div key={index} className='bg-stone-200 max-w-96 relative rounded-md shadow min-w-48 dark:bg-stone-800 p-6 grow text-center flex justify-between items-center flex-col transition duration-500'>
                        {user.avatar && <img src={user.avatar} alt='user avatar' className='object-cover object-center rounded-full w-16 h-16 shadow-md' /> || <FaUser />}
                        <p className='text-lg font-semibold mt-2'>
                            {user.firstName} {user.lastName} 
                        </p>
                    </div>
                ))
            }
        </div>
    );
}

export default AuthUsers;
