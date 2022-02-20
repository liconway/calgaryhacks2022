import React, { useNavigate } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoginButton from './LoginButton';
import sittingImg from '../img/nomad.png';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
// import '../css/Homepage.css';

function Homepage() {
    require("../css/Homepage.css");
    return (
        <div class="landing-page">
            <div class="landing-page-flex">
                <div class="landing-description">
                    <h1 class="landing-page__header">Journable</h1>
                    <h4 class="landing-page__description">Think, Write, Live</h4>
                    <LoginButton />
                </div>

                <img src={sittingImg} alt="this is gaming!" style={{"width":"100%", "height":"auto"}}/>
            </div>
        </div>
    );
}

export default Homepage;