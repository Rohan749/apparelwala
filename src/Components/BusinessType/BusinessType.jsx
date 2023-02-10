import React, { useEffect } from 'react'
import "./BusinessType.css"
import img1 from "./icons.svg";
import img2 from "./b2b.svg";
import img3 from "./retail.svg";
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";



const BusinessType = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <>
        <div id="chooseYourBusiness" className="chooseType">
        <div data-aos="fade-up" data-aos-delay="100" className="type__heading">
          Select your type and start your business today
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className="businesstype__desc">
          Start your business within a minute and grow it with us.
        </div>
        <div className="businesstype__body">
          <div data-aos="fade-up" data-aos-delay="300" className="wrapper_type">
            <Link to="/choose-your-business/sign-up">
            <div className="typeBusiness manufacturer">
              <div className="img__icon">
                <img src={img1} alt="manufacturer" />
              </div>
              <div className="typeBusiness__heading">Manufacturer</div>
              <div className="typeBusiness__desc">
                Make your skill useful and earn with it. Manufacture your
                products and sell it.
              </div>
            </div>
            </Link>
            <Link to="/choose-your-business/sign-up"> 
            <div className="typeBusiness b2b">
              <div className="img__icon">
                <img src={img2} alt="manufacturer" />
              </div>
              <div className="typeBusiness__heading">B2B</div>
              <div className="typeBusiness__desc">
                Make your skill useful and earn with it. Manufacture your
                products and sell it.
              </div>
            </div>
            </Link>
            <Link to="/choose-your-business/sign-up">
            <div className="typeBusiness retail">
              <div className="img__icon">
                <img src={img3} alt="manufacturer" />
              </div>
              <div className="typeBusiness__heading">Retail</div>
              <div className="typeBusiness__desc">
                Make your skill useful and earn with it. Manufacture your
                products and sell it.
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default BusinessType