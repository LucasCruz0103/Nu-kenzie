import { useState } from "react";
import {Form} from "../Form"
import { List } from "../List";
import "./style.css";
export function Home ({ callBack, listTransactions, setListTransactions }) {
  const [filtrando,setFiltrando ] = useState("");
  function entrando ()  {
    setFiltrando("entrada");
  };
  function todos  ()  {
    setFiltrando("");
  };
  function saindo  () {
    setFiltrando("saida");
  };
  return (
    <div className="container">
      <header>
        <h1>
          Nu <span>Kenzie</span>
        </h1>
        <button onClick={callBack}>Inicio</button>
      </header>
      <main>
        <section className="sectionForm">
          {listTransactions.length > 0 ? (
            <>
              <Form list={listTransactions} callBack={setListTransactions} />
              <section className="sectionPreco">
                <aside>
                  <h3>Valor Total:</h3>
                  <p>O valor se refere ao total que você tem</p>
                </aside>
                <p className="preco">
                  ${" "}
                  {listTransactions.reduce(
                    (valorIncial, valorAtual) => valorIncial + Number(valorAtual.value),
                    0
                  )}
                </p>
              </section>
            </>
          ) : (
            <Form list={listTransactions} callBack={setListTransactions} />
          )}
        </section>
        <section className="navegando">
          <section className="navegandoPorDinheiro">
            <h3>Resumo financeiro</h3>
            <aside>
              <button onClick={todos}>Todos</button>
              <button onClick={entrando}>Entradas</button>
              <button onClick={saindo}>Despesas</button>
            </aside>
          </section>
          {listTransactions.length > 0 ? (
            <List
              list={listTransactions}
              callBack={setListTransactions}
              filtro={filtrando}
            />
          ) : (
            <section className="vazio">
              <p>Você ainda não possui nenhum lançamento</p>
              <section className="containerVazio">
                <div className="grande"></div>
                <div className="pequeno"></div>
              </section>
              <section className="containerVazio">
                <div className="grande"></div>
                <div className="pequeno"></div>
              </section>
              <section className="containerVazio">
                <div className="grande"></div>
                <div className="pequeno"></div>
              </section>
            </section>
          )}
        </section>
      </main>
    </div>
  );
};
