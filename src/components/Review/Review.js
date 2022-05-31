import React from 'react';
import revImg1 from '../../imgs/JON972-150x150.jpg'
import revImg2 from '../../imgs/SMK943.jpg'
import revImg3 from '../../imgs/TIN0846F-150x150.jpg'
import { Carousel, Col, Container, Row } from 'react-bootstrap';

const Review = () => {
    return (
        <div style={{height: '500px'}} className='text-center review-bg text-white'>
            <Container>
                <Row>
                    <Col sm={3}></Col>
                    <Col sm={6} className='revCol'>
                        <Carousel indicators={false}>
                            <Carousel.Item>
                            <img
                                    className="d-block mx-auto rounded-circle rev-img"
                                    src={revImg1} 
                                    alt="First slide"
                                />
                                    <h3>Devon Koss</h3>
                                    <p>World-class training and development programs developed by top teachers Connect Fellow to the tools you love to make your meeting, management, and productivity.</p>
                                <Carousel.Caption>
                                
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                                    className="d-block mx-auto rounded-circle rev-img"
                                    src={revImg2}
                                    alt="Second slide"
                                />
                                    <h3>Fred Hyman</h3>
                                    <p>World-class training and development programs developed by top teachers Connect Fellow to the tools you love to make your meeting, management, and productivity.</p>

                                <Carousel.Caption>
                                
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                                    className="d-block mx-auto rounded-circle rev-img"
                                    src={revImg3}
                                    alt="Third slide"
                                />
                                    <h3>Tim Burton</h3>
                                    <p>World-class training and development programs developed by top teachers Connect Fellow to the tools you love to make your meeting, management, and productivity.</p>

                                <Carousel.Caption>
                                
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col sm={3}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Review;