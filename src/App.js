import './App.css';
import Acoes from './components/Acoes/Acoes';
import Cabecalho from './components/Cabecalho/Cabecalho';
import Recursos from './components/Recursos/Recursos';

import React, { useState } from 'react';

function App() {
  const [estoque, setEstoque] = useState({
    madeira: 0,
    ouro: 0
  });

  const handleClick = (e) => {
    const id = e.target.id;
    switch (id) {
      case "cortarBtn":
        setEstoque((prevState) =>
                ({ ...prevState, madeira: prevState.madeira + 1 }));
        break;
      default:
        break;
    }
  };



  return (    
    <div className='App'> 
      <Cabecalho estoque={estoque}/>
      <Recursos /> 
      <Acoes handleClick={handleClick} />
    </div>    
  );
}



export default App;
