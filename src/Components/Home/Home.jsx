import React from "react";
import ChooseBusiness from "./ChooseBusiness/ChooseBusiness";
import Features from "./Features/Features";
import HomeFooter from "./HomeFooter/HomeFooter";
import Homepage from "./HomeScreen/Homepage";
import MobileAppPage from "./MobileView/MobileAppPage";

const Home = () => {
  return (
    <>
      <Homepage />
      <ChooseBusiness />
      <Features />
      <MobileAppPage />
      <HomeFooter />
    </>
  );
};

export default Home;
