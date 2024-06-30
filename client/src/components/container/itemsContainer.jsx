import React from 'react';

const ItemsContainer = ({ children, custom }) => {
    return (
        <div className={`${custom ? custom : ""} grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-12 p-12`}>
            {children}
        </div>
    );
}

export default ItemsContainer;
