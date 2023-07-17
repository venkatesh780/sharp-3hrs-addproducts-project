import { useEffect, useState } from "react";

import classes from "./ProductList.module.css";

const ProductList = (props) => {
  const products = props.products;
  const deleteHandler = (e) => {
    props.onDelete(e.target.parentElement.firstChild.innerText.trim(" "));
  };
  return (
    <div>
      {console.log("list rendered!!!")}
      <h1>Products</h1>
      <ol>
        {products.map((product) => {
          return (
            <li key={product.productId}>
              <p>{product.productId + " "}</p>
              <p>{product.sellingPrice + " "}</p>
              <p>{product.productName + " "}</p>
              <button onClick={deleteHandler}>delete</button>
            </li>
          );
        })}
      </ol>
      <h3>Total value worth of Products: RS </h3>
    </div>
  );
};

export default ProductList;
