import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ImageWithZoom, Image } from 'pure-react-carousel';
import Carousel from '../components/Carousel';
import BasicButton from '../components/BasicButton';

function HomePage() {
    const [data, setData] = useState('');

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

    const headerStyle = {
        padding: '20px',
        textAlign: 'center',
        width: '100%',
        background: 'rgba(0,0,0,0.2)', // semi-transparent background
        backdropFilter: 'blur(10px)',
        boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
    };

    const navStyle = {
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'space-between', // Alinha elementos nos extremos
        alignItems: 'center',
        width: '100%', // Garante que o menu ocupe toda a largura
        padding: '0 20px', // Espaço interno para o alinhamento
    };



    const otherLinksStyle = {
        display: 'flex',
        gap: '20px', // Espaço entre os outros links
    };


    const linkStyle = {
        color: '#fff',
        textDecoration: 'none',
        padding: '10px 20px',
        borderRadius: '20px',
        background: 'rgba(255,255,255,0.1)',
        transition: 'background 0.3s',
    };

    const linkHoverStyle = {
        background: 'rgba(255,255,255,0.3)'
    };

    // We'll create a small component to handle the hover effect on links
    const NavLink = ({ to, children }) => {
        const [hover, setHover] = React.useState(false);

        return (
            <Link
                to={to}
                style={{ ...linkStyle, ...(hover ? linkHoverStyle : {}) }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {children}
            </Link>
        );
    };

    const carousel_div = {
        display: "block",
        width: '100%',
        height: '100%',
        maxHeight: '1000px',
        maxWidth: '800px',
    }

    const mainContentStyle = {
        flex: '1',
        width: '100%',
        //maxHeight: '200px',
        maxWidth: '1200px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px 20px'
    };

    const ctaStyle = {
        marginTop: '30px',
        display: 'flex',
        justifyContent: 'center'
    };



    useEffect(() => {
        // Fetch data from the Express API
        fetch('http://localhost:9090/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div style={appStyle}>
            <header style={headerStyle}>
                <h1 style={{ margin: '0', fontFamily: 'Arial, sans-serif', fontSize: '2.5rem', letterSpacing: '1px' }}>
                    Sistema de cadastro de carros
                </h1>
                <nav style={navStyle}>
                    <BasicButton to="/login" text="Login"></BasicButton>
                </nav>
            </header>
            <div style={mainContentStyle}>
                <div style={carousel_div}>
                    <Carousel></Carousel>
                </div>
                <div style={ctaStyle}>
                    <BasicButton
                        label="Contato"
                        onClick={() => alert('Contact form coming soon!')}
                        style={{
                            background: '#4c6ef5',
                            borderRadius: '30px',

                        }}
                    />
                    Contact
                </div>
            </div>
        </div>
    );
}

export default HomePage;