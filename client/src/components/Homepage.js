import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoginButton from './LoginButton';
import sittingImg from '../img/sitting-3.png';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import '../css/Homepage.css';

function Homepage() {
    return (
        <div>
            <Container>
                <Row>
                    <Col id="sign-in">
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit </h1>
                        <h4>consectetur adipiscing elit </h4>
                        <Card body>
                            <LoginButton />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col id="hero">
                        <Image fluid src={sittingImg} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Homepage;