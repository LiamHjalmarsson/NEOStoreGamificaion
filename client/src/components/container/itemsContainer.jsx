import React from 'react';

const ItemsContainer = ({ children, custom }) => {
    return (
        <div className={`${custom ? custom : ""} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-6 2xl:gap-6 py-4 px-6 lg:pt-12`}>
            {children}
        </div>
    );
}

export default ItemsContainer;
