import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoginButton from './LoginButton';
import sittingImg from '../img/sitting-3.png';


function Homepage() {
    return (
        <div>
            <Navigation />
            <Container>
                <Row>
                    <Col>
                        <LoginButton />
                    </Col>
                    <Col>
                        <img src={sittingImg} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Homepage;