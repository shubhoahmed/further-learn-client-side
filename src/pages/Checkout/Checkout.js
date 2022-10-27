import React from 'react';
import { useLoaderData, } from 'react-router-dom'

const Checkout = () => {
    const course = useLoaderData();
    const { title, } = course;
    return (
        <div>
            <h1 className='font-bold text-center'>{title}</h1>
        </div>
    );
};

export default Checkout;