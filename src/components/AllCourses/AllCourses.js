import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';

const AllCourses = () => {
    const [courses] = useCourses();
    return (
        <div className='mt-5 pt-5'>
            <Container>
            <h1 className='text-center mb-5'>All Courses</h1>
                <Row>
                    {
                        courses.map(course => <Course key={course.key} course={course}></Course>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default AllCourses;