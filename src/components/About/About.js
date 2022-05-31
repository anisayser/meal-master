import React from 'react';
import aboutImg from '../../imgs/FOOT733-740x540.jpeg'
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div className='mt-5 pt-5'>
            <Container>
                <Row>
                    <Col>
                        <img src={aboutImg} className='img-fluid' alt="" />
                    </Col>
                    <Col>
                        <h1>Whether you want to learn or to share what you know you’ve come to the right place</h1>
                        <p>World-class training and development programs developed by top teachers. Build skills with courses, certificates, and degrees online from world-class universities and companies.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;