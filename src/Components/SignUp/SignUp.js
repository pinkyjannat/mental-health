import React,{ useState} from 'react';
import {Button,Form} from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {Link, useNavigate} from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';




const SignUp = () => {
    const[agree,setAgree]=useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
    
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

    


 const navigate = useNavigate();

const navigateLogin= e =>{
 navigate('/login')
}

if(loading){
    return <Loading/>
}
if(user){
    navigate('/checkout')
}

const handleSignup =event =>{
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    if(agree){
        createUserWithEmailAndPassword(email, password)
    }
    
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
            <Form.Group onClick={()=>setAgree(!agree)} className="mb-3" controlId="formBasicCheckbox" >
                <Form.Check className={agree? 'text-primary': "text-danger"} type="checkbox" label="Terms and condition" />
            </Form.Group>
            
            <Button
            disabled={!agree}
             variant="primary w-50 mx-auto b-block" type="submit">
                Submit
            </Button>
        </Form>
        <p>Already have an account? <Link to='/login' className='text-danger text-decoration-none pe-auto' onClick={navigateLogin}>Please login</Link></p>
    </div>
    );
};

export default SignUp;