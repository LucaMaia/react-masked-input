import './App.css';
import MaskedInput from './MaskedInput';
import { useState } from 'react';


function App() {
  const [values, setValues] = useState({});

    function handleChange(event) {
        setValues({
          ...values,
          [event.target.name] : event.target.value,
        })
    }

  return (
  <div className='App'>
    <h1>Hello People</h1>
    
      <MaskedInput
        mask="999.999.999-99"
        name="cpf"
        value={values.cpf}
        onChange={handleChange}
      />

      <MaskedInput
        mask="99999-999"
        name="cep"
        value={values.cep}
        onChange={handleChange}
      />

    <button  onClick={() => setValues('')}>Limpar</button>
  </div> 
  );
}

export default App;
