import React from 'react';
import { useRootContext } from '../../../../../../pages/Root';
import Icon from '../Icon';
import { FaCircleUser } from 'react-icons/fa6';

const User = ({ profileHandler }) => {
    let { user } = useRootContext();

    return (
        <div className='flex border border-stone-800 rounded-sm dark:border-stone-200 py-2 px-8 gap-4 items-center cursor-pointer ml-2' onClick={profileHandler}>
            <p className='font-semibold text-sm'>
                {user.firstName ? user.firstName : "Sign in"}
            </p>
            <Icon icon={<FaCircleUser />} />
        </div>
    );
}

export default User;
