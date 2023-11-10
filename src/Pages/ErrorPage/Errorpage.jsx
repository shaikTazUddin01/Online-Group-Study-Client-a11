import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div className='text-center'>
            <h1 className='text-4xl text-center pt-20 font-semibold'>404..!! page not found</h1>
            <Link to={'/'} className='mx-auto'><button className='btn btn-primary mt-5'>Go Home</button></Link>
        </div>
    );
};

export default Errorpage;