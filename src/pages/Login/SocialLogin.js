import React from 'react';
import { GoogleAuthProvider, signInWithPopup, getAuth, GithubAuthProvider } from "firebase/auth";
import { useNavigate, useLocation } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const auth = getAuth();
    const handleSignInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
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
        signInWithPopup(auth, githubProvider)
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
            <button className='py-2 border w-full my-3 rounded-md' onClick={handleSignInWithGoogle}>Login with Google</button>
            <button className='py-2 border w-full rounded-md' onClick={handleGithubSignIn}>Login with Github</button>
        </div>
    );
};

export default SocialLogin;