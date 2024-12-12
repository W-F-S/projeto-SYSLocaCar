import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import LoginPage from './pages/LoginPage';
import SigninPage from './pages/SigninPage';
import LocacaoPage from './pages/LocacaoPage';

import Carousel from './components/Carousel';
import BasicButton from './components/BasicButton';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ImageWithZoom, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


function App() {



    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/form" element={<FormPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/singin" element={<SigninPage />} />
                <Route path="/locacao" element={<LocacaoPage />} />
            </Routes>
        </Router>
    );
}

export default App;
