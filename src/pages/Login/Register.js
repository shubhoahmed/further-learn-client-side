import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.confiq';

const auth = getAuth(app);

const Register = () => {
    const [success, setSuccess] = useState(false);
    const handleSubmit = event => {
        event.preventDefault();
        setSuccess(false);

        const form = event.target;
        const fullname = form.fullname.value;
        const photourl = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password, fullname, photourl)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true);
                form.reset();
                updateUserName(fullname, photourl);
            })
            .catch(error => {
                console.error('error', error);

            })
    }

    const updateUserName = (fullname, photourl) => {
        updateProfile(auth.currentUser, {
            displayName: fullname, photoURL: photourl
        })
            .then(() => {
                console.log('display name updated')
            })
            .catch(error => console.error(error))
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
                    <input type="text" name='photourl' className="w-full px-5 py-2 border rounded-md" id="formGroupExampleInput2" placeholder="Photo URL" required />
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
            {success && <p>Successfully login to the account</p>}
            <p className='mt-2'><small className='text-center'>Already have an account? Please <Link to='/login' className='text-green-500'>Login</Link></small></p>

        </div>
    );
};

export default Register;