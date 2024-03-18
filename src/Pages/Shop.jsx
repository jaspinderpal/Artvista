import React, { useEffect, useState } from "react";
import Popular from "../Components/Popular/Popular";
import NewCollections from "../Components/NewCollections/NewCollections";
import Hero from "../Components/Hero/Hero";
import Register from "../Components/Register/Register";

const Shop = () => {

  const [products, setProducts] = useState([]);
  const modernProduct = products.filter((item) => item.category == 'Modern');
   const retroProduct = products.filter((item) => item.category == ' Retro');
   console.log(retroProduct);

  console.log(products, "+++++++++")

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:4000/products/allproducts');
      const data = await response.json();
      if (data.success == true) {
        setProducts(data.products);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };


  return (
    <div>
              <Hero />

      <Popular products={modernProduct} />
      <NewCollections products={retroProduct}/>
      <Register />

    </div>
  );
};

export default Shop;
