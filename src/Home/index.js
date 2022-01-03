import React from "react";
import Products from "../Products";
import Categories from "../Categories";

const Home = () => {
  return (
    <div className="container">
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
