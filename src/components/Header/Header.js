import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../imgs/logo.jpg';

const Header = () => {
    const imgWidth = {
        height: '50px'
    }
    const colorNav = {
        backgroundColor: '#fff'
    }
    const navigate = useNavigate();
    const goToHome = ()=> {
        navigate('/home',{
            replace: true
        })
    }

    return (
        <div>

            {/* MAIN MENU STARTS*/}
            <Navbar style={colorNav} expand="lg">
                <Container>
                    <Navbar.Brand href="#">
                        
                            <img onClick={goToHome} src={logo} alt="" style={imgWidth} />
                        
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
                            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* MAIN MENU ENDS */}
        

        </div>
    );
};

export default Header;