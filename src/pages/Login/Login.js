import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import SocialLogin from './SocialLogin';

const Login = () => {
    const [error, setError] = useState('');
    const { signIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true })

            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }


    return (
        <div className='lg:w-1/2 w-full p-5 mx-auto'>
            <h3 className='text-green-500 text-2xl text-center font-bold'>Please Login First!</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="mb-2">Enter Your Email</label>
                    <input type="email" name='email' className="w-full px-5 py-2 border rounded-md" id="formGroupExampleInput" placeholder="Your Email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Your Password</label>
                    <input type="password" name='password' className="w-full px-5 py-2 border rounded-md" id="formGroupExampleInput2" placeholder="Your password" required />
                </div>
                <button className="py-2 w-full bg-green-400 rounded-md font-semibold" type="submit">Login</button>
            </form>
            {error && <p className='text-red-500'>{error}</p>}
            <p className='mt-2'><small>New to this website? Please <Link to='/register' className='text-green-500'>Register</Link></small></p>
            <hr />
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;