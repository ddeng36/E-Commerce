import React from "react";
import "./Cart.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const total = () =>{
    let total = 0;
    products.forEach(item => {
      total += item.price * item.quantity;
    });
    console.log(total);
    return total;
  }
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0, 100)}...</p>
            <div className="price"> {item.quantity} x ${item.price}</div>
          </div>{" "}
          <DeleteOutlineIcon className="delete" onClick={() => dispatch(removeItem(item.id))} />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL ${total()}</span>
        <button>PROCEED TO CHECKOUT</button>
        <span className="reset" onClick={()=>dispatch(resetCart())} >RESET</span>
      </div>
    </div>
  );
};

export default Cart;
