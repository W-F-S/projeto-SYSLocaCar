import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import HomePage from './HomePage';
import FormPage from './pages/FormPage';

import BasicButton from './components/BasicButton';

function App() {
    return (
        <Router>
            <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
                <h1>Welcome to My App</h1>
                <nav style={{ marginBottom: '20px' }}>
                    <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
                    <Link to="/form" style={{ margin: '0 10px' }}>Form</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/form" element={<FormPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
