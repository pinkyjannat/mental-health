import React,{useRef} from 'react';
import {Button,Form} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';

const Login = () => {
    const emailRef =useRef('');
    const passRef= useRef('');
    const navigate=useNavigate()

    const handleSubmit = event =>{
        event.preventDefault();
        const email=emailRef.current.value;
        const password= passRef.current.value;
        console.log(email,password)
    }

    const navigateSignUp=()=>{
       navigate('/signup')
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-center mt-2' > Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>New  here? <Link to='/signup' className='text-danger text-decoration none pe-auto' onClick={navigateSignUp}>Please Sign up</Link></p>
        </div>
    );
};

export default Login;
