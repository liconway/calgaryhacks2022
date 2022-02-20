import React from 'react';
import LoginButton from './LoginButton';
import sittingImg from '../img/nomad.png';


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

                <img src={sittingImg} alt="this is gaming!" style={{"height":"auto"}}/>
            </div>
        </div>
    );
}

export default Homepage;