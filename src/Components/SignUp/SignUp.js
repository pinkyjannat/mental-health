import { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from '../../firebase.init';
import "../Login/Login.css";

const Signup = () => {
    const [name, setName] = useState('');
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPass: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    });


    const [createUserWithEmailAndPassword, user, loading, hookError] =
        useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleNameChange = event => {
        setName(event.target.value)
    }

    const handleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({ ...errors, email: "" });
        } else {
            setErrors({ ...errors, email: "Invalid email" });
            setUserInfo({ ...userInfo, email: "" });
        }

    };
    const handlePasswordChange = (e) => {
        const passwordRegex = /.{5,}/;
        const validPassword = passwordRegex.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Minimum 5 digit please" });
            setUserInfo({ ...userInfo, password: "" });
        }
    };

    const handleConfirmPasswordChange = (e) => {
        if (e.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPass: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Password's doesn't match" });
            setUserInfo({ ...userInfo, confirmPass: "" });
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // console.log(userInfo);
        createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    };

    useEffect(() => {
        if (hookError) {
            switch (hookError?.code) {
                case "auth/invalid-email":
                    toast("Invalid email");
                    break;
                case "auth/invalid-password":
                    toast("Invalid password");
                    break;
                default:
                    toast("something went wrong");
            }
        }
    }, [hookError]);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user]);

    return (
        <div className="login-container">
            <div className="login-title">Sign up</div>
            <form className="login-form" onSubmit={handleLogin}>
                <input type='text' placeholder='your name' onBlur={handleNameChange}></input>
                <input type="text" placeholder="Your Email" onBlur={handleEmailChange} />
                {errors?.email && <p className="error-message">{errors.email}</p>}
                <div className="relative">
                    <input type="password" placeholder="password" onBlur={handlePasswordChange} />
                    {errors?.password && <p className="error-message">{errors.password}</p>}
                </div>
                <input
                    type="password"
                    placeholder="confirm password"
                    onChange={handleConfirmPasswordChange}
                />

                <button>Sign up</button>

                <ToastContainer />
            </form>
        </div>
    );
};

export default Signup;