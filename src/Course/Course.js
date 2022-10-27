import React from 'react';

const Course = ({ course }) => {
    const { id, title, image, description, price, } = course;
    return (
        <div className="card lg:card bg-base-100 shadow-xl">
            <figure><img className='h-[300px] object-cover' src={image} alt='' /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Get Premium</button>
                </div>
            </div>
        </div>
    );
};

export default Course;