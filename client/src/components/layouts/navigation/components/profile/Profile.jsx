import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRootContext } from '../../../../../pages/Root';
import { firstLetter } from '../../../../../utils/textTransformation';

const Profile = ({ open }) => {
    let { user, logout } = useRootContext();

    return (
        <div className={`${open ? "translate-x-0" : "translate-x-full"} transform transition duration-300 p-12 bg-stone-200 dark:bg-stone-800 top-32 mt-2 w-full max-w-sm right-0 fixed flex flex-col gap-8`}>

            {
                user && (
                    <h3 className='text-center text-lg tracking-wide'>
                        {firstLetter(user.firstName)}
                    </h3>
                )
            }

            <div className='flex gap-4'>
                {
                    !user && (
                        <div>
                            <NavLink to="login" className="border-stone-700 border w-full h-full p-2 text-center">
                                Login
                            </NavLink>
                            <NavLink to="register" className="border-stone-700 border w-full h-full p-2 text-center">
                                Register
                            </NavLink>
                        </div>
                    ) || (
                        <div className=' flex flex-col gap-8 grow'>
                            <NavLink to="/" className="border-stone-700 border w-full h-full p-2 text-center">
                                Account
                            </NavLink>
                            <NavLink to="/" className="border-stone-700 border w-full h-full p-2 text-center">
                                Orders
                            </NavLink>
                            <NavLink to="/" className="border-stone-700 border w-full h-full p-2 text-center">
                                Benefits
                            </NavLink>
                            <NavLink to="/" className="border-stone-700 border w-full h-full p-2 text-center">
                                Settings
                            </NavLink>
                            <button onClick={logout}>
                                Logout
                            </button>
                        </div>
                    )
                }
            </div>

        </div>
    );
}

export default Profile;
