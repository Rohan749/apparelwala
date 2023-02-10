import React, { useEffect } from 'react'
import "./Features.css"
import profile from "../Images/profile1.svg"
import analytics from "../Images/analytics.svg"
import refer from "../Images/refer.svg"
import follow from "../Images/follow.png"
import rightimg from "../Images/rightimg.png"
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
    <div className='features__body'>
        <h1 data-aos="fade-up" data-aos-delay="100" className='features__heading'>
        Amazing features to help you in your growing business
        </h1>
        <p data-aos="fade-up" data-aos-delay="200" className='features__para'>New features to give you more control on your business</p>
        <div className='features__container'>
          <div className='features__container_left'>
            <img data-aos="zoom-in-up" data-aos-delay="300" src={profile} className="features__profile" alt="Profile" />
            <img data-aos="zoom-in-right" data-aos-delay="300" src={analytics} className="features__analytics"alt="analytics"/>
            <img data-aos="zoom-in-left" src={refer} className="features__refer"/>
            <img data-aos="zoom-in" src={follow} className="features__follow"/>
          </div>
          <div className='features__container_right'>
            <img data-aos="fade-up" data-aos-delay="300" src={rightimg} className="features__rightimg"/>
          </div>
        </div>
    </div>
      <div className='backbody'>
        <div className='backbody__heading'>
        We go above and beyond to ensure your experience with us is a positive
          one.
        </div>
        <div className='backbody__body' />
      </div>
    </>
  )
}

export default Features