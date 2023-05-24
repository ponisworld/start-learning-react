// importamos para habituarnos a importar la librería
import React from 'react';
import ReactDOM from 'react-dom';

// seleccionamos el root otra vez...
const root = ReactDOM.createRoot(document.querySelector('#root'));

// Y creamos nuestro primer componente, el cual va a ser
// una función que va a devolver una interfaz, es decir
// código HTML.
function FirstComponent() {
  return <h1>Hello World!</h1>;
}

// y renderizamos en el root nuestro componente...
// Si sólo queremos nuestro componente, lo hacemos
// de la siguiente forma...
// root.render(<FirstComponent/>)

// Pero hay otra forma en la que podemos reutilizar el mismo
// componente varias veces.

root.render(
  <div>
    <FirstComponent />
    <FirstComponent />
    <FirstComponent />
  </div>
);

// Así lo tendríamos 3 veces!!!!!
