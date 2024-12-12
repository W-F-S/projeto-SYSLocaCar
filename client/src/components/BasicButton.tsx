import React from 'react';

interface BasicButtonProps {
    text: string;
    targetUrl: string;
}

const style = {
    color: '#33333',
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: '20px',
    background: 'rgba(255,255,255,0.1)',
    transition: 'background 0.3s',
};

const BasicButton: React.FC<BasicButtonProps> = ({ text, to }) => {
    const handleRedirect = () => {
        // Update the window location to navigate
        window.location.href = to;
    };

    return (
        <button  onClick={handleRedirect} style={style}>
            {text}
        </button>
    );
};

export default BasicButton;