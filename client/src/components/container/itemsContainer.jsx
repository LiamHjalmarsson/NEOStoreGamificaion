import React from 'react';

const ItemsContainer = ({ children, custom }) => {
    return (
        <div className={`${custom ? custom : ""} flex flex-wrap justify-center items-center mx-auto p-6 lg:p-12 max-w-7xl`}>
            {children}
        </div>
    );
}

export default ItemsContainer;
