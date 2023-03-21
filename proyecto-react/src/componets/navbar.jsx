import React from 'react';
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Acerca de</a></li>
        <li><a href="#">Contacto</a></li>
        <li><CartWidget /></li>
        <li><ItemListContainer greeting="Hola!" /></li>
      </ul>
    </nav>
  );
}

export default Navbar;
