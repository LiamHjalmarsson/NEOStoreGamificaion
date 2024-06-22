import React from 'react';

const CartDetailRow = ({ title, text }) => {
    return (
        <div className='flex w-full'>
            <div className='flex-grow'>
                <h3>
                    {title}
                </h3>
            </div>
            <p>
                {text}
            </p>
        </div>
    );
}

export default CartDetailRow;
