import React from 'react';
import './loading.css';

const LoadingAni = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="w-28 h-28 border-4 border-green-500 border-t-transparent border-solid rounded-full animate-spin">

            </div>
            {/* Add a message if needed */}
            {/* <p className="text-green-800 mt-4">Loading...</p> */}
        </div>
    );
};

export default LoadingAni;
