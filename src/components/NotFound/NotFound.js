import React from 'react';
import errorNot from '../../imgs/404.png';

const NotFound = () => {
    return (
        <div className='text-center'>
            <img src={errorNot} alt="" />
        </div>
    );
};

export default NotFound;