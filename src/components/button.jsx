import React from 'react';

export const Button = ({ children, onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 ${className}`}
  >
    {children}
  </button>
);
