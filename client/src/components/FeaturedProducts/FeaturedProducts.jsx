import "./FeaturedProducts.scss";
import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          There are some products that are trending recently. You can check them
          out. mock data here,just for demo purpose, hahahaahah, yeah!
        </p>
      </div>
      <div className="bottom">
      {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
