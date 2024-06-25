import React from 'react';
import { useRootContext } from '../../../../../pages/Root';
import { firstLetter } from '../../../../../utils/textTransformation';
import LinkButton from '../../../../elements/LinkButton';
import { FiLogOut } from "react-icons/fi";

const Profile = ({ open }) => {
    let { user, logout } = useRootContext();

    return (
        <div className={`${open ? "translate-x-0" : "translate-x-full"} transform transition duration-300 p-8 bg-indigo-500 dark:bg-stone-800 top-32 mt-2 max-w-sm w-full right-0 fixed flex flex-col gap-8`}>
            {
                user && (
                    <h3 className='text-center text-lg font-bold tracking-wide'>
                        {firstLetter(user.firstName)}
                    </h3>
                )
            }

            {
                !user && (
                    <div className='flex justify-between items-center gap-6 w-full'>
                        <LinkButton href="login">
                            Login
                        </LinkButton>
                        <LinkButton href="register">
                            Register
                        </LinkButton>
                    </div>
                ) || (
                    <div className=' flex flex-wrap justify-center gap-8 grow'>
                        <LinkButton href={`user/${user._id}`} custom="dark:hover:text-stone-200 w-fit">
                            Account
                        </LinkButton>
                        <LinkButton href={`user/${user._id}/orders`} custom="dark:hover:text-stone-200 w-fit">
                            Orders
                        </LinkButton>
                        <LinkButton href={`user/${user._id}/benefits`} custom="dark:hover:text-stone-200 w-fit">
                            Benefits
                        </LinkButton>
                        <LinkButton href={`user/${user._id}/settings`} custom="dark:hover:text-stone-200 w-fit">
                            Settings
                        </LinkButton>
                        <button onClick={logout} className='flex gap-2 justify-center items-center'>
                            <span>
                                Logout
                            </span>
                            <FiLogOut />
                        </button>
                    </div>
                )
            }

        </div>
    );
}

export default Profile;
