import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <Container>
            <h1 className='text-center mb-5 mt-5 pt-5'>Contact Us</h1>
                <Row>
                    <Col sm={3}>

                    </Col>
                    <Col sm={6}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Your Question</Form.Label>
                                {/* <Form.Control type="textarea" placeholder="Password" /> */}
                                <textarea name="questions" id="" className='form-control' cols="30" rows="10"></textarea>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Contact Me Anytime" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col sm={3}>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;