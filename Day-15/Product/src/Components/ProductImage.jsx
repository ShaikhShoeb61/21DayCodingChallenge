import React from 'react';
import productImage from '../assets/images/product1.jpeg'; // Correct import path
import productImageHover from '../assets/images/product-hover.jpeg'; // Correct import path
import '../index.css';

const ProductImage = () => {
  return (
    <div>
      <div className="product-image">
        <img
          src={productImage}
          alt="Product Image"
          className="image"
        />
        <img
          src={productImageHover}
          alt="Hovered Product Image"
          className="hover-image" 
        />
      </div>
    </div>
  );
}

export default ProductImage;
