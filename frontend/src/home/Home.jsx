import React from "react";
import Banner from "../components/Banner";
import Bestsellerbooks from "./Bestsellerbooks";
import Favbooks from "./Favbooks";
import PromoBanner from "./PromoBanner";
import OtherBooks from "./OtherBooks";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <Bestsellerbooks></Bestsellerbooks>
      <Favbooks></Favbooks>
      <PromoBanner></PromoBanner>
      <OtherBooks></OtherBooks>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
