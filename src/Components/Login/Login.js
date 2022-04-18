import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import CheckOut from '../CheckOut/CheckOut';

const Login = () => {
   
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    })

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

    

    const handleEmailChange = (e) => {
        //  setEmail(e.target.value);
        const emailRegex = /^(\S+)@(\S+)\.(\S+)$/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({ ...errors, email: "" })
        } else {
            setErrors({ ...errors, email: "Invalid email" });
            setUserInfo({ ...userInfo, email: "" });
        }
    }

    const handlePasswordChange = (e) => {
        const passwordRegex = /.{5,}/;
        const validPassword = passwordRegex.test(e.target.value);
        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value })
            setErrors({ ...errors, password: "" });

        } else {
            setErrors({ ...errors, password: "minimum 5 digit please" });
            setUserInfo({ ...userInfo, password: "" })
        }
    }

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(userInfo.email, userInfo.password)
    }

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user]);

    useEffect(() => {
        const error = hookError || error1;
        if (error) {
            switch (error?.code) {
                case "auth/invalid-email":
                    toast("invalid email");
                    break;
                default:
                    case "auth/invalid-password":
                        toast("invalid password");
                    
            }
        }
    }, [hookError,error1])

  
    return (
        <div className='login-container'>
            <h2>This is login </h2>
            <div className="login-title"></div>
            <form className='login-form' onSubmit={handleLogin}>
           
                <input type='text' placeholder='your email' onChange={handleEmailChange}></input>
                {errors?.email && <p className='error-message'>{errors.email}</p>}
                <input type='password' placeholder='your password' onChange={handlePasswordChange}></input>
                {errors?.password && <p className='error-message'>{errors.password}</p>}
                <button><Link  className='text-decoration-none text-light'to='/home'>login</Link></button>
                <button  onClick={() => signInWithGoogle()}><Link className='text-decoration-none text-light' to='/home'></Link>Sign in with Google</button>
                <ToastContainer />
                <p>Dont have a account? <Link to="/signup">Sign Up Here</Link></p>

            </form>

        </div>
    );
};

export default Login;