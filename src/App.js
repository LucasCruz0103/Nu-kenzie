import './App.css';
import { useState } from 'react';
import { Logica } from "../src/Components/Logica" ;
import {Home} from "../src/Components/Pagina Home";
function App() {
  const [listTransactions, setListTransactions] = useState([])
  const [entrou, setEntrou] = useState(true)
  function logar() {
    setEntrou(false)
  }
  function logout() {
    setEntrou(true)
  }
  return (
    <div className="App">
      {entrou ?
        <Logica callBack={logar} />
        :
        <>
          <Home callBack={logout} listTransactions={listTransactions} setListTransactions={setListTransactions} />
        </>
      }
    </div>

  );
}

export default App;
