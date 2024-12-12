import React from 'react';
import { useNavigate } from 'react-router-dom';

interface BasicButtonProps {
    text: string;
    to: string; // Correct the prop name to "to"
}

const style = {
    
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: '20px',
    background: 'rgba(172, 170, 191, 0.1)',
    transition: 'background 0.3s',
    cursor: 'pointer',
    border: 'none',
};

const BasicButton: React.FC<BasicButtonProps> = ({ text, to }) => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        // Navigate programmatically using React Router
        navigate(to);
    };

    return (
        <button onClick={handleRedirect} style={style}>
            {text}
        </button>
    );
};

export default BasicButton;
