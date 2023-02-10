import React, { useEffect } from "react";
import "../ChooseBusiness/ChooseBusiness.css";
import img1 from "../Images/icons.svg";
import img2 from "../Images/b2b.svg";
import img3 from "../Images/retail.svg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


const ChooseBusiness = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div id="choose-your-business" className="chooseBusiness">
        <div data-aos="fade-up" className="businesstype__heading">
          Choose your type and start your business today
        </div>
        <div data-aos="fade-up" data-aos-delay="100" className="businesstype__desc">
          Start your business within a minute and grow it with us.
        </div>
        <div className="businesstype__body">
          <div data-aos="fade-up" data-aos-delay="200" className="wrapper_type">
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
  );
};

export default ChooseBusiness;
