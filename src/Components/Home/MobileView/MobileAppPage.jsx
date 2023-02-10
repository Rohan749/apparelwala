import React, { useEffect } from "react";
import "./MobileApp.css";
import mobileView from "../Images/mobileView.svg"
import AOS from "aos";
import "aos/dist/aos.css";

const MobileAppPage = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div id="mobile-apps" className="mobilePage__body">
      <h1 data-aos="fade-up" data-aos-delay="100" className="mobilePage__heading">Our Mobile Apps</h1>
      <div className="mobilePage__content">
        <div className="mobilePage__left">
          <h1 className="mobilePage__title"> Manage your business from <br /> mobile devices
          </h1>
          <p className="mobilePage__para">
            Stay connected to your business from anywhere with mobile device and
            Monitor usage and track performance of your account with Apparelwala
          </p>
          <div className="mobilePage__btn">
            <button className="appStore__download"/>
            <button className="playStore__download"/>
          </div>
        </div>
        <div data-aos="zoom-in-down" data-aos-delay="200" className="mobilePage__right">
            <img className="mobilePage__mobile" data-aos="zoom-in-up" data-aos-delay="400" src={mobileView}/>
        </div>
      </div>
      <div className="mobilePage__footer">
        <div className="mobile__footercontents">
          <nav className="footer_numbers">400+</nav>
          <nav className="footer_types"> &nbsp;MANUFACTURERS</nav>
        </div>
        <div className="mobile__footercontents">
        <nav className="footer_numbers">2800+</nav>
          <nav className="footer_types"> &nbsp;WHOLESALERS</nav>
        </div>
        <div className="mobile__footercontents">
        <nav className="footer_numbers">30000+</nav>
          <nav className="footer_types"> &nbsp;RETAILERS</nav>
        </div>
      </div>
    </div>
  );
};

export default MobileAppPage;
