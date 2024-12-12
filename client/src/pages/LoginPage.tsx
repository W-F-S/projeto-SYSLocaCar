import React, { useState } from 'react';

import BasicButton from '../components/BasicButton';


function LoginPage() {
    const [formData, setFormData] = useState({ username: '', password: '' });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        console.log('Form data:', formData);
        // Add your login logic here if needed
    };


    const pageStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #4c6ef5, #b197fc)',
        color: '#fff',
        fontFamily: 'Arial, sans-serif',
    };

    const formStyle = {
        background: '#fff',
        color: '#333',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
        width: '300px',
        textAlign: 'center',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '5px',
        border: '1px solid #ccc',
    };



    const buttonHoverStyle = {
        background: '#3744d5',
    };


    return (
        <div style={pageStyle}>
            <form style={formStyle}>
                <h2>Login</h2>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleInputChange}
                    style={inputStyle}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    style={inputStyle}
                />
                {/* Replace the button with the BasicButton */}
                <BasicButton text="Login" to="/" />
                <BasicButton text="Sign-in" to="/singin" />
            </form>
        </div>
    );
}

export default LoginPage;