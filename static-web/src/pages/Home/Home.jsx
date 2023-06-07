import React from "react";
import Slider from "../../components/Slider/Slider";
import "./Home.scss";
import Category from "../../components/Category/Category";
import Contact from "../../components/Contact/Contact";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedProducts type="featured"/>
      <FeaturedProducts type="trending"/>
      <Category />
      <Contact />
    </div>
  );
};

export default Home;
