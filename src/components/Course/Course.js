import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Course.css';

const Course = (props) => {
    const {title, cover, author} = props.course;
    
    return (
        <Col sm={3}>
            <Card>
                <Card.Img variant="top" src={cover} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        Author: {author}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Course;