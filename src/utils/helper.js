export const getProductsFromLocal = () => {
  return JSON.parse(localStorage.getItem("products")) || [];
};

export const setProductsToLocal = (products) => {
  localStorage.setItem("products", JSON.stringify(products));
};
