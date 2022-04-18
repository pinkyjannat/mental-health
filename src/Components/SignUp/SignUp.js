import React,{useRef} from 'react';
import {Button,Form} from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {Link, useNavigate} from 'react-router-dom';
import auth from '../../firebase.init';




const SignUp = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);


 const navigate = useNavigate();

const navigateLogin= e =>{
 navigate('/login')
}
if(user){
    navigate('/checkout')
}

const handleSignup =event =>{
    event.preventDefault();


    const email = event.target.email.value;
    const password = event.target.password.value;
     createUserWithEmailAndPassword(email, password)
}
    return (
        <div className='container w-50 mx-auto'>
        <h2 className='text-center mt-2' > Please Sign Up Here</h2>
        <Form  onSubmit={handleSignup}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" required/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        <p>Already have an account? <Link to='/login' className='text-danger text-decoration none pe-auto' onClick={navigateLogin}>Please login</Link></p>
    </div>
    );
};

export default SignUp;