import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom'

const CourseDetails = () => {
    const course = useLoaderData();
    const navigate = useNavigate()
    const { id, title, description, image, price } = course;
    return (
        <div>
            <div>
                <button className='rounded-md m-5 py-2 px-3 bg-green-400'>Download PDF</button>
            </div>
            <div className="card lg:card bg-base-100 shadow-xl">
                <figure><img src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <h3>$ {price}</h3>
                    <div className="card-actions justify-start">
                        <button onClick={() => navigate(`/checkout/${id}`)} className="btn btn-primary">Get Premium Access</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;