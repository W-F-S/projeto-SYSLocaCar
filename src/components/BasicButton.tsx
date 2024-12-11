import React from 'react';

interface BasicButtonProps {
    text: string;
    targetUrl: string;
}

const BasicButton: React.FC<BasicButtonProps> = ({ text, targetUrl }) => {
    const handleRedirect = () => {
        // Update the window location to navigate
        window.location.href = targetUrl;
    };

    return (
        <button onClick={handleRedirect} style={{ padding: '10px 20px', margin: '10px', cursor: 'pointer' }}>
            {text}
        </button>
    );
};

export default BasicButton;