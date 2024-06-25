import React, { useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { useRootContext } from '../Root';

const User = () => {
    let { user } = useRootContext();
    let { id } = useParams();
    let navigation = useNavigate();

    useEffect(() => {
        if (!user) {
            navigation("/register");
        }
    
        if (user._id !== id) {
            navigation("/");
        }
    }, []);

        return (
            <>
                <Outlet />
            </>
        );
}

export default User;
