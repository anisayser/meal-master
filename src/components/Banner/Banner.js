import React from 'react';
import textBg from '../../imgs/WIS763.png';
import chefImg from '../../imgs/ALIU746.png';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Banner.css';
import { useNavigate } from 'react-router-dom';

const Banner = () => {

    const navigate = useNavigate();
    const goToCourses = ()=>{
        navigate('/courses')
    }

    return (
        <div className='banner-container'>
            <Container>
                <Row>
                    <Col sm={5} className='banner-text'>
                        <div className='subHead mb-5'>
                            <h5 className='subHeading'>Welcome to cooking classes</h5>
                            <img src={textBg} className='textBg' alt="" />
                        </div>
                        <h1 className='heding'>Be Professional Cook like a Boss</h1>
                        <p className='slogan'>World-class cooking programs developed by chef from the world best cook</p>
                        <Button onClick={goToCourses} variant="danger">Explore Course</Button>
                    </Col>
                    <Col sm={7}>
                        <img src={chefImg} className='img-fluid chefImg' alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;