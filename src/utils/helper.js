export const getProductsFromLocal = () => {
  return JSON.parse(localStorage.getItem("products")) || [];
};

export const setProductsToLocal = (products) => {
  localStorage.setItem("products", JSON.stringify(products));
};

export const getTotalPruductsWorth = (products) => {
  let totalWrth = 0;

  for (let prd of products) {
    totalWrth += parseInt(prd.sellingPrice);
  }

  return totalWrth;
};
