import React, { useEffect, useState } from 'react';
import Course from '../../Course/Course';
import SideNav from '../../Shared/SideNav/SideNav';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div className='lg:flex gap-5 p-3'>
            <div className='lg:w-1/5  p-5'>
                <SideNav courses={courses}></SideNav>
            </div>
            <div className='lg:grid lg:grid-cols-3 lg:w-4/5 gap-5 p-5'>
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}

                    >

                    </Course>)
                }
            </div>

        </div>
    );
};

export default Courses;