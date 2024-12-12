import React from 'react';

interface BasicButtonProps {
    text: string;
    to: string;
    type: string;
    onClick?: () => void;

}

const style = {
    color: '#33333',
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: '20px',
    background: 'rgba(255,255,255,0.1)',
    transition: 'background 0.3s',
};

//submint
const BasicButton: React.FC<BasicButtonProps> = ({ text, to, type="nosubmit", onClick }) => {
    const handleRedirect = () => {
        // Update the window location to navigate
        window.location.href = to;
        if(type == "submit"){

        }
    };

    const handleClick = () => {
        // Call the provided onClick handler, if any
        onClick?.();
    };
    
    return (
        <button  onClick={handleRedirect} style={style}>
            {text}
        </button>
    );
};

export default BasicButton;