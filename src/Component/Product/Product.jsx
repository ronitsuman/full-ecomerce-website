import React from 'react';

const Product = ({ onAddToCart }) => {
  return (
    <div>
      <h2>Product Page</h2>
      <button className='bg-green-200 border-2 border-green-200 p-4 hover:bg-green-200 ' onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
