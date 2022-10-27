import React from 'react';
import { useLoaderData } from 'react-router-dom'

const CourseDetails = () => {
    const course = useLoaderData();
    return (
        <div>
            {
                course.category
            }
        </div>
    );
};

export default CourseDetails;