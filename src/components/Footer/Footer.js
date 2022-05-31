import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import footerLogo from '../../imgs/logo.jpg';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <img src={footerLogo} className="img-fluid mb-5" alt="" />
            <Container>
                <Row>
                    <Col sm={3}>

                    </Col>
                    <Col sm={6} className='text-center'>
                        <Nav>
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
                            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        </Nav>
                    </Col>
                    <Col sm={3}>

                    </Col>
                </Row>
            </Container>

            <p>© Copyright 2022 Meal Master All rights reserved.</p>
        </div>
    );
};

export default Footer;