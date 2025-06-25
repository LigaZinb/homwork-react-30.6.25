import React from "react";
import "./ShoppingList.css";

const products = [
  {
    name: "Bread",
    image: "https://images.pexels.com/photos/2434/bread-food-healthy-breakfast.jpg?auto=compress&cs=tinysrgb&dpr=1&w=200"
  },
  {
    name: "Apples",
    image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200"
  },
  {
    name: "Carrots",
    image: "https://images.pexels.com/photos/65174/pexels-photo-65174.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200"
  }
];



export default function ShoppingList() {
  return (
    <div className="shopping-list">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <img src={product.image} alt={product.name} />
          <p>{product.name}</p>
        </div>
      ))}
    </div>
  );
}



