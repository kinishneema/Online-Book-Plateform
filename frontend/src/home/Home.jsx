import React from "react";
import Banner from "../components/Banner";
import Bestsellerbooks from "./Bestsellerbooks";
import Favbooks from "./Favbooks";
import PromoBanner from "./PromoBanner";

const Home = () => {
  return (
    <div>
      <Banner />
      <Bestsellerbooks></Bestsellerbooks>
      <Favbooks></Favbooks>
      <PromoBanner></PromoBanner>
    </div>
  );
};

export default Home;
