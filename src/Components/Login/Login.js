    import React, { useEffect, useState } from 'react';
    import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
    
    import  './Login.css';
    import { ToastContainer, toast } from 'react-toastify';
      import 'react-toastify/dist/ReactToastify.css';
    import { Link } from 'react-router-dom';
     import auth from '../../firebase.init';
import CheckOut from '../CheckOut/CheckOut';
    
    const Login = () => {
       const[userInfo,setUserInfo]=useState({
           email:"",
           password:""
       })
       const[errors,setErrors] = useState({
           email:"",
           password:"",
           general:"",
       })
    
        const [
            signInWithEmailAndPassword,
            user,
            loading,
            hookError,
          ] = useSignInWithEmailAndPassword(auth);
          
       
    
        const handleEmailChange=(e)=>{
            //  setEmail(e.target.value);
             const emailRegex= /^(\S+)@(\S+)\.(\S+)$/;
             const validEmail= emailRegex.test(e.target.value);
             
             if(validEmail){
                 setUserInfo({...userInfo , email:e.target.value});
                 setErrors({...errors, email:""})
             }else{
                 setErrors({...errors, email:"Invalid email"});
                 setUserInfo({...userInfo , email:""});
             }
        }
    
        const handlePasswordChange=(e)=>{
            const passwordRegex= /.{6,}/;
            const validPassword=passwordRegex.test(e.target.value);
         if(validPassword){
             setUserInfo({...userInfo, password:e.target.value})
              setErrors({...errors,password:""});
         
         }else{
             setErrors({...errors,password:"minimum six characters needed"});
             setUserInfo({...userInfo, password:""})
         }
        }
    
        const handleLogin=(e)=>{
            e.preventDefault();
         signInWithEmailAndPassword(userInfo.email,userInfo.password)
        }
       
        useEffect(()=>{
       if(hookError){
           switch(hookError?.code){
               case"auth/invalid-email":
               toast("invalid email");
               break;
               default:
                   toast("something went wrong")
           }
       }
        },[hookError])

        if (loading) {
            return <p>Loading...</p>;
          }
          if (user) {
            return (
              <div>
                <p>Signed In User:<CheckOut></CheckOut></p>
              </div>
            );
          }
        return (
            <div className='login-container'>
                <h2>This is login </h2>
                <div className="login-title"></div>
                <form className='login-form' onSubmit={handleLogin}>
                 <input type='text' placeholder='your email' onChange={handleEmailChange}></input>
               {errors?.email && <p className='error-message'>{errors.email}</p>}
                 <input type='password' placeholder='your password' onChange={handlePasswordChange}></input>
                 {errors?.password && <p className='error-message'>{errors.password}</p>}
                 <button><Link to='/home'>login</Link></button>
                 {/* {error && <p className='error-message'>{error}</p>} */}
                 {/* {hookError && <p className='error-message'>{hookError?.message}</p>} */}
                 <ToastContainer/>
                 <p>Dont have a account? <Link to="/signup">Sign Up First</Link></p>
    
                </form>
    
            </div>
        );
    };
    
    export default Login;