import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendPasswordResetEmail } from 'firebase/auth';
import Loading from '../Loading/Loading';

const Login = () => {

    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();
   const location=useLocation()
  let from= location.state?.from?.pathname ||'/';

  
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if(loading || sending){
        return <Loading/>
    }

    let errorElement;

    if (error ) {
        errorElement =  
                <p className='text-danger'>Error: {error?.message}</p>}
    if (user) {
        navigate(from,{replace :true});
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        signInWithEmailAndPassword(email, password)
    }

    const navigateSignUp = () => {
        navigate('/signup')
    }

    
    const resetPassword =async() =>{
        const email = emailRef.current.value;
       if(email){
        await sendPasswordResetEmail(email);
        toast('Sent email');
       }
       else{
           toast('Please enter your email address')
       }
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-center mt-2' > Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passRef} type="password" placeholder="Password" required />
                </Form.Group>

                {errorElement}
                <Button variant="primary mx-auto w-50 d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>
            <p>New  here? <Link to='/signup' className='text-danger text-decoration-none pe-auto' onClick={navigateSignUp}>Please Sign up</Link></p>
            <p>Forget Password? <button className='btn btn-link text-primary text-decoration-none pe-auto' onClick={resetPassword}>Reset password</button></p>
            <SocialLogin></SocialLogin>
            <ToastContainer/>
        </div>
    );
};

export default Login;
