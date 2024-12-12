import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import LoginPage from './pages/LoginPage';
import SigninPage from './pages/SigninPage';
import ProcessoDeLocacao from './pages/LocacaoPage';

import Carousel from './components/Carousel';
import BasicButton from './components/BasicButton';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ImageWithZoom, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


function App() {

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


    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/form" element={<FormPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/singin" element={<SigninPage />} />
                <Route path="/processo-de-locacao" element={<ProcessoDeLocacao />} />
            </Routes>
        </Router>
    );
}

export default App;
