import React from 'react';
import { useRootContext } from '../../../../../../pages/Root';
import Icon from '../Icon';
import { FaCircleUser } from 'react-icons/fa6';

const User = ({ profileHandler }) => {
    let { user } = useRootContext();

    return (
        <div className='flex border border-stone-200 dark:border-indigo-500 py-2 px-4 gap-4 items-center cursor-pointer ml-2 hover:bg-stone-200 hover:text-stone-800 dark:hover:text-stone-200 dark:hover:bg-indigo-500 transition duration-500' onClick={profileHandler}>
            <p className='font-semibold text-lg'>
                {user.firstName ? user.firstName : "Sign in"}
            </p>
            <Icon icon={<FaCircleUser />} />
        </div>
    );
}

export default User;
