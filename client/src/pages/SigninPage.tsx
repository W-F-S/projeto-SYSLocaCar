import React, { useState } from 'react';

import BasicButton from '../components/BasicButton';
import BasicSubmitButton from '../components/BasicSubmitButton';

const SigninPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });

    const appStyle = {
        minHeight: '100vh',
        margin: '0',
        padding: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #4c6ef5, #b197fc)', // Purple-ish gradient
        fontFamily: 'Arial, sans-serif',
        color: '#fff'
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent page reload on form submission
        try {
            console.log("iniciando post;");
            const response = await fetch('http://localhost:9090/newUser', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            const data = await response.json();
            console.log('Form submitted successfully:', data);
            alert('Form submitted successfully!');
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to submit the form.');
        }
    };

    return (
        <div style={appStyle}>
            <h2>Submit Your Details</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        style={{ marginLeft: '10px', padding: '5px' }}
                        placeholder="Enter your name"
                        required
                    />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="name"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{ marginLeft: '10px', padding: '5px' }}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <input type="radio" id="tipoAdmim" name="fav_language" value="JavaScript"/>
                <label for="tipoAdmim">Admin</label>
                <input type="radio" id="tipoUser" name="fav_language" value="JavaScript" selected />
                <label for="tipoUser">User</label>
                <br/>
                <BasicSubmitButton text="Cadastrar" onClick={handleSubmit} to="/login">
                </BasicSubmitButton>
            </form>
        </div>
    );
};

export default SigninPage;
