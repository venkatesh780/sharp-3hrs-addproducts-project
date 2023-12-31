import ProductForm from "./src/components/ProductForm";
import ProductList from "./src/components/ProductList";
import { useState, useEffect } from "react";
import { getProductsFromLocal, setProductsToLocal } from "./src/utils/helper";
import classes from "./App.module.css";

const App = () => {
  const productList = getProductsFromLocal();
  const [products, setProducts] = useState(productList);

  const addProductToStore = (product) => {
    setProducts((prevState) => {
      return [...prevState, product];
    });
  };

  setProductsToLocal(products);

  const deleteProduct = (id) => {
    console.log(id);
    const newProducts = products.filter((prd) => {
      return prd.productId !== id;
    });
    setProducts(newProducts);
  };

  return (
    <>
      <h1>Add Products</h1>
      <ProductForm onSubmit={addProductToStore} />
      <ProductList onDelete={deleteProduct} products={products} />
    </>
  );
};
export default App;
