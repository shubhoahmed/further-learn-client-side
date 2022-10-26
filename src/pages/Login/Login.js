import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.confiq';
import SocialLogin from './SocialLogin';

const auth = getAuth(app);

const Login = () => {
    const [success, setSuccess] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        setSuccess(false);

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true);

            })
            .catch(error => {
                console.error('error', error)
            })

    }

    const handleEmailBlur = event => {
        const email = event.target.value;
        setUserEmail(email);
        console.log(email);
    }

    const handleForgetPassword = () => {
        if (!userEmail) {
            alert('Please enter your email address.')
            return;
        }
        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                alert('Password Reset email sent. Please check your email.')
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className='lg:w-1/2 w-full p-5 mx-auto'>
            <h3 className='text-green-500 text-2xl text-center font-bold'>Please Login First!</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="mb-2">Enter Your Email</label>
                    <input onBlur={handleEmailBlur} type="email" name='email' className="w-full px-5 py-2 border rounded-md" id="formGroupExampleInput" placeholder="Your Email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Your Password</label>
                    <input type="password" name='password' className="w-full px-5 py-2 border rounded-md" id="formGroupExampleInput2" placeholder="Your password" required />
                </div>
                <button className="py-2 w-full bg-green-400 rounded-md font-semibold" type="submit">Login</button>
            </form>
            {success && <p>Successfully login to the account</p>}
            <p className='mt-2'><small>New to this website? Please <Link to='/register' className='text-green-500'>Register</Link></small></p>
            <p><small>Forget Password? <button type="button" onClick={handleForgetPassword} className="btn btn-link">Reset Password</button></small></p>
            <hr />
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;