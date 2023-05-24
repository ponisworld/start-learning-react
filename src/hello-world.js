// importamos la librería de React
import React from 'react';
// importamos el dom, ya que nuestro proyecto será web
import ReactDOM from 'react-dom';

// creamos un elemento root seleccionando el div con id root.
const rootElem = ReactDOM.createRoot(document.querySelector('#root'));

// renderizamos el interior del root element y hacemos nuestro
// primer hello world en react!
rootElem.render(<h1>Hello World!</h1>);
