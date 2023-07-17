import { useEffect, useState } from "react";

import classes from "./ProductList.module.css";
import { getTotalPruductsWorth } from "../utils/helper";

const ProductList = (props) => {
  const [totalWorth, setTotalWorth] = useState(0);

  const products = props.products;

  useEffect(() => {
    const totalWrth = getTotalPruductsWorth(products);
    setTotalWorth(totalWrth);
  }, [products]);

  const deleteHandler = (e) => {
    props.onDelete(
      e.target.parentElement.firstChild.firstChild.innerText.trim(" ")
    );
  };

  return (
    <div className={classes.list_container}>
      <h1>Products List</h1>
      <ol>
        {products.map((product) => {
          return (
            <li key={product.productId}>
              <div>
                <p>{product.productId + " "}</p>
                <p>{product.sellingPrice + " "}</p>
                <p>{product.productName + " "}</p>
              </div>
              <button className={classes.delete_btn} onClick={deleteHandler}>
                Delete
              </button>
            </li>
          );
        })}
      </ol>
      <h3>
        Total value worth of Products: RS{" "}
        <span className={classes.total_woth}>{totalWorth}</span>
      </h3>
    </div>
  );
};

export default ProductList;
