import React, { useEffect } from "react";
import "./Homepage.css";
import AOS from "aos";
import "aos/dist/aos.css";


const Homepage = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="tilted__background" />
      <div className="description">
        <strong>
        <h1 data-aos="fade-up" data-aos-delay="100" className="desc _heading">
           India's Premier B2B Marketplace for Manufacturers and Retailers
        </h1>
        </strong>
        <p data-aos="fade-up" data-aos-delay="200" className="desc para">
          Connect with Retailers Across India through Affiliate B2B Connections
          and Grow Your Business with Affiliate Partnerships in the Indian
          Market
        </p>
        <a href="#choose-your-business">
        <button data-aos="fade-up" data-aos-delay="300" className="desc desc__btn">Start Your Business Now!</button>
        </a>
      </div>
      <div data-aos="fade-up" data-aos-delay="400" className="display_img" />
    </>
  );
};

export default Homepage;
