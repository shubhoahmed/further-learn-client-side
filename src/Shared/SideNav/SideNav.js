import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = ({ courses }) => {
    return (
        <div>
            <h2 className='font-bold text-white text-center bg-slate-500 rounded-md py-2 my-3'>Courses Categories</h2>
            <div>
                {
                    courses.map(course => <p key={course.id}>
                        <Link className='w-full font-semibold py-2 text-center text-white bg-blue-500 inline-block my-2 rounded-md' to={`/courses/${course.id}`}>{course.category}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default SideNav;