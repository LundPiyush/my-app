import { createContext, useContext, useEffect, useState } from "react";

export const ProductsContext = createContext(null);

export const ProductsProvider = ({ children }) => {
  const [productsData, setProductData] = useState([]);
  const getData = async () => {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      console.log(data?.products);
      setProductData(data?.products);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <ProductsContext.Provider value={{ productsData }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
