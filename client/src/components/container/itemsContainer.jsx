import React from 'react';

const ItemsContainer = ({ children, custom }) => {
    return (
        <div className={`${custom ? custom : ""} overflow-y-scroll gap-6 lg:gap-12 flex justify-start md:justify-center items-center mx-auto md:p-6 lg:p-12 max-w-7xl`}>
            {children}
        </div>
    );
}

export default ItemsContainer;
