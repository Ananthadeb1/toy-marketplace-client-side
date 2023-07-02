import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyTab from "./ToyTab";
import { useParams } from "react-router-dom";
// import { Link } from 'react-router-dom';
// import SingleService from './SingleService';
// import SingleToy from './SingleToy';

const ToysSample = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toyssample")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const sub_category = ["Sports Car", "Truck", "Mini Police Car"];

  const sports_Car = toys.filter((toy) => toy.sub_category === "Sports Car");
  const truck = toys.filter((toy) => toy.sub_category === "Truck");
  const mini_Police_Car = toys.filter((toy) => toy.sub_category === "Mini Police Car");
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Sports Car</Tab>
          <Tab>Truck</Tab>
          <Tab>Police Mini</Tab>
        </TabList>

        <TabPanel>
          <ToyTab toys={sports_Car}></ToyTab>
        </TabPanel>
        <TabPanel>
          <ToyTab toys={truck}></ToyTab>
        </TabPanel>
        <TabPanel>
          <ToyTab toys={mini_Police_Car}></ToyTab>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default ToysSample;
