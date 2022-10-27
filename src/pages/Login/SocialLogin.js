import React, { useContext } from 'react';
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SocialLogin = () => {
    const { providerLogin, setLoading } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleSignInWithGoogle = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                if (user) {
                    navigate(from)
                }
                console.log(user);
            })
            .catch(error => {
                console.error('error: ', error)
            })
    }
    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                if (user) {
                    navigate(from)
                }
                console.log(user);
            })
            .catch(error => {
                console.error('error: ', error)
            })
    }
    return (
        <div>
            <button className='py-2 font-bold bg-red-500 text-white border w-full my-3 rounded-md' onClick={handleSignInWithGoogle}>Login with Google</button>
            <button className='py-2 font-bold bg-black text-white border w-full rounded-md' onClick={handleGithubSignIn}>Login with Github</button>
        </div>
    );
};

export default SocialLogin;