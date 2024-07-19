
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import cosmetics from '../cosmeticsData';
import { CartContext } from '../CartContext';

const ProductDetail = () => {
  const { productId } = useParams();
  const product = cosmetics.find(p => p.id === parseInt(productId));
  const { addToCart } = useContext(CartContext);

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
