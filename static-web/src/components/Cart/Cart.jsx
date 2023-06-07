import React from "react";
import "./Cart.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "A nice product",
      oldPrice: 100,
      price: 10,
      isNew: true,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1549202/pexels-photo-1549202.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "radom product",
      oldPrice: 99,
      price: 9,
      isNew: true,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1549100/pexels-photo-1549100.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "another product",
      oldPrice: 98,
      price: 8,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
  ];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0, 100)}...</p>
            <div className="price"> 1 x ${item.price}</div>
          </div>{" "}
          <DeleteOutlineIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$100</span>
        <button>PROCEED TO CHECKOUT</button>
        <span className="reset">RESET</span>
      </div>
    </div>
  );
};

export default Cart;
