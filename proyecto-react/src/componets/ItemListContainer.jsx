import React from 'react';
import './ItemListContainer.css';

function ItemListContainer({ greeting }) {
  return (
    <div>
      <h2>{greeting}</h2>
      <p>Este es el contenido del ItemListContainer</p>
    </div>
  );
}

export default ItemListContainer;
