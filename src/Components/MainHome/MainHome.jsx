import React from "react";
import Banner from "./Banner/Banner";
import OurTeam from "./OurTeam/OurTeam";
import About from "./About/About";
import ToysSample from "./ToysSample/ToysSample";
import { Helmet } from "react-helmet";
import Investkid from "./InvestKid/Investkid";
import Customersays from "./Customersays/Customersays";
import Yourinsta from "./Yourinsta/Yourinsta";
import Howworks from "./Howworks/Howworks";
import Offerbanner from "./Offerbanner/Offerbanner";
import Finesttoy from "./Finesttoy/Finesttoy";

const MainHome = () => {
  return (
    <div>
      <Helmet>
        <title>Toy Land</title>
      </Helmet>
      <Banner></Banner>
      <div className="mx-12">
        <About></About>
        <Howworks></Howworks>
        <Investkid></Investkid>
        <ToysSample></ToysSample>
      </div>
      <Offerbanner></Offerbanner>
      <div className="mx-12">
      <Customersays></Customersays>
      <Finesttoy></Finesttoy>
      <Yourinsta></Yourinsta>
        <OurTeam></OurTeam>
        
      </div>
    </div>
  );
};

export default MainHome;
