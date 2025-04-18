import React from 'react';

function Inputbox({ placeholder, value, onChange }) {
    return ( 
        <input
            placeholder={placeholder}
            type="text"
            value={value}
            onChange={onChange}
            className="mb-2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
    );
}

export default Inputbox;