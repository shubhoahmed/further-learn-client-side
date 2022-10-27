import React from 'react';
import { useNavigate } from 'react-router-dom'

const Course = ({ course }) => {
    const { id, title, image, description, price, } = course;
    const navigate = useNavigate();
    return (
        <div className="card lg:card bg-base-100 shadow-xl">
            <figure><img className='h-[300px] object-cover' src={image} alt='' /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                    <button onClick={() => navigate(`/courses/${id}`)} className="btn btn-primary w-full">Get Premium</button>
                </div>
            </div>
        </div>
    );
};

export default Course;