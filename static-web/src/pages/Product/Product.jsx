import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
const Product = () => {
  const [selectImg, setSelectImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const images = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectImg(0)} />
          {/* setSelectImg[0] */}
          <img src={images[1]} alt="" onClick={(e) => setSelectImg(1)} />
          {/* setSelectImg[1] */}
        </div>
        <div className="mainImg">
          <img src={images[selectImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">$199</span>
        <p>
          here is some random text, here is some random text.lalalala ahhaha
          sdsdsd i dont know waht to say
        </p>
        <div className="quantity">
          <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>

        <button className="add">
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="link">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISHLIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
