import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./product.css"
export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        
          {productName}
          <br/>
        
         ${price}
      </div>
      <button className="addToCart" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};