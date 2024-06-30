import React from 'react';
import { useRootContext } from '../../../../../../pages/Root';
import Icon from '../Icon';
import { FaCircleUser } from 'react-icons/fa6';
import { firstLetter } from '../../../../../../utils/textTransformation';

const User = ({ profileHandler }) => {
    let { user } = useRootContext();

    return (
        <div className='flex border-2 border-stone-800 dark:border-stone-200 py-2 px-8 gap-4 items-center cursor-pointer' onClick={profileHandler}>
            <p className='font-semibold text-sm'>
                {user.firstName ? firstLetter(user.firstName) : "Sign in"}
            </p>
            {
                user.avatar && (
                    <img src={user.avatar} alt="avatar" className=' object-cover object-center rounded-full h-8 w-8' />
                ) || (
                    <Icon icon={<FaCircleUser />} />
                )
            }
        </div>
    );
}

export default User;
