import React from 'react';

const Errors = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 text-red-700 p-6">
            <div className="text-6xl font-bold mb-4">404</div>
            <div className="text-xl mb-4">Oops! The page you are looking for does not exist.</div>
        </div>
    );
}

export default Errors;
