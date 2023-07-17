import { useRef, useState, useEffect } from "react";

const ProductForm = (props) => {
  const productIDRef = useRef("");
  const sellingPriceRef = useRef("");
  const productNameRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();
    const product = {
      productId: productIDRef.current.value,
      sellingPrice: sellingPriceRef.current.value,
      productName: productNameRef.current.value,
    };
    props.onSubmit(product);
    productIDRef.current.value = "";
    sellingPriceRef.current.value = "";
    productNameRef.current.value = "";
  };

  return (
    <div>
      {console.log("form rendered")}
      <form>
        <label htmlFor="product-id">Product ID</label>
        <input id="product-id" type="text" ref={productIDRef} />
        <label htmlFor="selling-price">Selling Price</label>
        <input id="selling-price" type="number" ref={sellingPriceRef} />
        <label htmlFor="product-name">Product Name</label>
        <input id="product-name" type="text" ref={productNameRef} />
        <button onClick={submitHandler}>Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
