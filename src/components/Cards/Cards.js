import React from 'react';
import Course from '../Course/Course';

// import { Card, Col, Container, Row } from 'react-bootstrap';
import './Cards.css';

const Cards = () => {
    return (
        <div className='mt-5'>
            <h2 className='text-center mb-5'>Explore Popular Courses</h2>
            <Course></Course>
        </div>
    );
};

export default Cards;