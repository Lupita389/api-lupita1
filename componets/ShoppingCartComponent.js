// ShoppingCartComponent.js

import React from 'react';

const ShoppingCartComponent = ({ items, onRemoveItem }) => {
  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <h3>{item.productName}</h3>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio total: {item.totalPrice}</p>
            <button onClick={() => onRemoveItem(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCartComponent;
