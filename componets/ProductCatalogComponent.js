// ProductCatalogComponent.js

import React from 'react';

const ProductCatalogComponent = ({ products }) => {
  return (
    <div>
      <h2>Catálogo de Productos</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Precio: {product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCatalogComponent;
