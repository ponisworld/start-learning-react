// importamos para habituarnos a importar la librería
import React from 'react';
import ReactDOM from 'react-dom';
// importamos el componente necesario...
import FirstComponent from './FirstComponent';

// seleccionamos el root otra vez...
const root = ReactDOM.createRoot(document.querySelector('#root'));

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
  