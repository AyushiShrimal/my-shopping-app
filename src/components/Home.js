
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import AddProduct from './AddProduct';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from a JSON file or an API
    fetch('/path/to/productsData.json')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [
      ...prevProducts,
      { id: prevProducts.length + 1, ...newProduct },
    ]);
  };

  return (
    <div className="home">
      <h1>Welcome to MyShop</h1>
      <AddProduct addProduct={addProduct} />
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
