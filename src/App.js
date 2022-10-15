import './App.css';
import { useState } from 'react';
import Swal from 'sweetalert2'

function App() {
  const [count, setCount] = useState(0);

  document.title = `You clicked ${count} times`;

  const sumar = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      Swal.fire(
        'Mensaje',
        'El contador no puede ser mayor a 10',
        'error'
      );
    }
  }

  function restar() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      Swal.fire(
        {
          title: 'Mensaje',
          text: 'El contador no puede ser menor a 0',
          icon: 'question',
          confirmButtonColor: '#286779',
        }
      );
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>El estado del contador es {count}</h1>
        <button onClick={() => sumar()}>Sumar</button>
        <br />
        <button onClick={() => restar()}>Resta</button>
      </header>
    </div>
  );
}

export default App;

// Template: https://www.w3schools.com/w3css/w3css_templates.asp