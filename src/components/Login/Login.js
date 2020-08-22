import React, { useState } from 'react';
import './Login.css';
import Button from '@material-ui/core/Button';
import { auth, provider } from '../../firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((err) => {
                alert(err.message);
            });
    };
    return (
        <div className="login">
            <div className="login_container">
                <img
                    src="https://is4-ssl.mzstatic.com/image/thumb/Purple114/v4/b3/3a/a1/b33aa167-5a3a-1a09-332e-61d750453e28/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.png"
                    alt="login"
                />
                <h1> Sing in to Clver Programmer HQ</h1>
                <p>cleverprogrammer.slack.com</p>
                <Button onClick={signIn}> Sign In with Google</Button>
            </div>
        </div>
    );
}

export default Login;
