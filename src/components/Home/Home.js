import React from 'react';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Courses></Courses>
            <Review></Review>
        </div>
    );
};

export default Home;