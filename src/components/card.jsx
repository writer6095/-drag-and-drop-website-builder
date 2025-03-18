import React from 'react';

export const Card = ({ children, className = '' }) => (
  <div className={`border rounded-md p-4 shadow-md ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children }) => (
  <div className="p-2">{children}</div>
);