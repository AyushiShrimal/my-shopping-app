
// src/components/Products.js
import React from 'react';
import { Link } from 'react-router-dom';
import cosmetics from '../cosmeticsData';

const Products = () => {
  return (
    <div>
      <h1>Cosmetics</h1>
      <ul>
        {cosmetics.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
