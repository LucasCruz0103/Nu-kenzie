import "./style.css";
export function Form  ({ list, callBack }) {

  function lista(newList) {
    callBack([...list, newList]);
  };

  function dadosRecebidos (event) {
    event.preventDefault();
    const objetoInput = {}
    const input = [...event.target]
    input.forEach(element=>{
      if(element.name !== ""){
        objetoInput[element.name] = element.value

      }
      
    })
    if(objetoInput.type === "saida"){
      objetoInput.value = -objetoInput.value
    }
    lista(objetoInput);
  };
  return (
    <form onSubmit={dadosRecebidos} className="formComecandoACobrar">
      <section className="descrever">
        <label htmlFor="descricao">Descrição</label>
        <input type="text" id="descricao" name="description" placeholder="Digite aqui sua descrição" className="inputDescricao" required />
        <p>Ex: Compra de roupas</p>
      </section>
      <section className="valor">
        <section className="valorLabels">
          <label htmlFor="valor">Valor</label>
          <label htmlFor="tipoValor">Tipo de valor</label>
        </section>
        <section className="valorInputs">
          <input type="number" id="valor" name="value" placeholder="1  R$" required />
          <select id="tipoValor" name="type">
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>
          </select>
        </section>
      </section>
      <button type="submit">Insirir o valor</button>
    </form>
  );
};

            
  

            
            
            
            
          
          
          
          
          
          
          
        
