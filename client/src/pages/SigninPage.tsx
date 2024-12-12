import React, { useState } from 'react';

const SigninPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent page reload on form submission
        try {
            const response = await fetch('http://localhost:9090/hello', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
                //body: JSON.stringify(formData),
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
        <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
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
                <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default SigninPage;
