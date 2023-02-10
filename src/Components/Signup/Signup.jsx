import React, { useEffect } from "react";
import "./Signup.css"
import googleIcon from "./googleIcon.svg"
import fblogo from "./fblogo.svg"
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Signup = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    

    return <>
        <div className="signup__body">
            <div data-aos="fade-up" data-aos-delay="100" className="signup__outerBox">
                <Link className="signup__back" to="/choose-your-business">
                    BACK
                </Link>
                <div className="signup__apparelwala">Apparelwala</div>
                <div className="signup__heading">Create an account</div>
                <div className="signup__box">
                <form className="signup__form">
                    <input placeholder="Enter email or mobile number" className="signup__email"/>
                    <input placeholder="Enter Password" className="signup__password"/>
                </form>
                <button className="signup__btn btn_signup" type="submit">Signup</button>
                OR
                <button className="signup__btn btn_google"><img src={googleIcon}/> &nbsp; Sign-up with Google</button>
                <button className="signup__btn btn_facebook"><img src={fblogo}/> &nbsp; Sign-up with facebook</button>
                By continuing, you agree to our terms and policies.
            </div>
            </div>
        </div>
    </>
}

export default Signup;