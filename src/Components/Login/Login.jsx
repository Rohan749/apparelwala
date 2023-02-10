import React, { useEffect } from "react";
import "./Login.css"
import googleIcon from "./googleIcon.svg"
import fblogo from "./fblogo.svg"
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Login = () => {


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


    return <>
        <div className="login__body">
            <div data-aos="fade-up" data-aos-delay="100" className="login__outerBox">
                <Link className="login__back" to="/">
                    BACK
                </Link>
                <div className="login__apparelwala">Apparelwala</div>
                <div className="login__heading">Manage your account</div>
                <div className="login__box">
                <form className="login__form">
                    <input placeholder="Enter email or mobile number" className="login__email"/>
                    <input placeholder="Enter Password" className="login__password"/>
                </form>
                <button className="login__btn btn_login" type="submit">Login</button>
                OR
                <button className="login__btn btn_google"><img src={googleIcon}/> &nbsp; Login with Google</button>
                <button className="login__btn btn_facebook"><img src={fblogo}/> &nbsp; Login with facebook</button>
                By continuing, you agree to our terms and policies.
            </div>
            </div>
        </div>
    </>
}

export default Login