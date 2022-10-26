import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const { createUser, updateUserProfile, } = useContext(AuthContext);
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const fullname = form.fullname.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(fullname, photoURL);
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (
        <div className='lg:w-1/2 w-full p-5 mx-auto'>
            <h3 className='text-green-500 text-2xl text-center font-bold'>Please Register Now!</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="mb-2">Enter Your Full Name</label>
                    <input type="text" name='fullname' className="w-full px-5 py-2 border rounded-md" id="formGroupExampleInput" placeholder="Your Full Name" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="mb-2">Enter Photo URL</label>
                    <input type="text" name='photoURL' className="w-full px-5 py-2 border rounded-md" id="formGroupExampleInput2" placeholder="Photo URL" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput3" className="mb-2">Enter Your Email</label>
                    <input type="email" name='email' className="w-full px-5 py-2 border rounded-md" id="formGroupExampleInput3" placeholder="Your Email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput4" className="form-label">Your Password</label>
                    <input type="password" name='password' className="w-full px-5 py-2 border rounded-md" id="formGroupExampleInput4" placeholder="Your password" required />
                </div>
                <button className="py-2 w-full bg-green-400 rounded-md font-semibold" type="submit">Register</button>
            </form>
            {error && <p className='text-red-500'>{error}</p>}
            <p className='mt-2'><small className='text-center'>Already have an account? Please <Link to='/login' className='text-green-500'>Login</Link></small></p>

        </div>
    );
};

export default Register;