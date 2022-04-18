import React from 'react';
import notFound from '../../images/notFound.jpg';
const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'></h2>
            <img  className ='w-100'src={notFound} alt=""  />
        </div>
    );
};

export default NotFound;