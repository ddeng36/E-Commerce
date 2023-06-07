import React from "react";
import Card from "../Card/Card";
import "./List.scss";
const data = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "A nice product",
    oldPrice: 100,
    price: 10,
    isNew: true,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1549202/pexels-photo-1549202.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "radom product",
    oldPrice: 99,
    price: 9,
    isNew: true,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1549100/pexels-photo-1549100.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "another product",
    oldPrice: 98,
    price: 8,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/949671/pexels-photo-949671.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "some product",
    oldPrice: 97,
    price: 7,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1549100/pexels-photo-1549100.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "another product",
    oldPrice: 98,
    price: 8,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/949671/pexels-photo-949671.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "some product",
    oldPrice: 97,
    price: 7,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1549100/pexels-photo-1549100.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "another product",
    oldPrice: 98,
    price: 8,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/949671/pexels-photo-949671.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "some product",
    oldPrice: 97,
    price: 7,
  },
];
const List = () => {


  return (<div className="list">
    {data.map((item) => (
        <Card key={item.id} item={item} />
    ))}
</div>)
};

export default List;
