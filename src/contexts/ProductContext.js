import { data } from 'autoprefixer';
import React,{createContext, useState, useEffect}  from 'react';
 

// create context
export const ProductContext = createContext()

const  ProductProvider = ({ children }) => {
  // product state
  const [products, setProducts] = useState([]);
  useEffect (() => {
    const fetchProduct = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
      console.log(data)
    };

  fetchProduct()
  }, [])
  return <ProductContext.Provider value={{ products }}>{ children }</ProductContext.Provider>;
};

export default ProductProvider;
