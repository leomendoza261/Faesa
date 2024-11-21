import React from 'react';

const LogoutIcon = ({ size = 24, strokeColor = "currentColor", strokeWidth = 1.5, ...props }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={strokeWidth}
            stroke={strokeColor}
            className={`w-${size} h-${size} px-4 md:px-2 hover:text-blue-600`}
            {...props}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
        </svg>
    );
};

export default LogoutIcon;
