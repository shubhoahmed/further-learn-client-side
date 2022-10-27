import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SideNav = ({ courses }) => {
    return (
        <div>
            <h2 className='font-bold text-center '>Courses Categories</h2>
            <div>
                {
                    courses.map(course => <p key={course.id}>
                        <Link className='w-full py-2 text-center bg-gray-300 inline-block my-2 rounded-md' to={`/courses/${course.id}`}>{course.category}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default SideNav;