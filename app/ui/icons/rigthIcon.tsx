import React from 'react';

const RigthIcon = ({ size = 24, strokeColor = "currentColor", strokeWidth = 1.5, ...props }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={strokeWidth}
            stroke={strokeColor}
            className={`w-${size} h-${size} text-dark hover:text-blue-600`}
            {...props}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
    );
};

export default RigthIcon;
