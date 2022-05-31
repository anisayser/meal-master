import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';

const Courses = () => {

    const [courses] = useCourses();
    const col4Card = courses.slice(0,4);
    return (
        <div>
            <h2 className='mt-5 mb-5 text-center'>Explore Popular Courses</h2>
            <Container>
                <Row>
                    {
                        col4Card.map(course => <Course key={course.id} course={course}></Course>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Courses;