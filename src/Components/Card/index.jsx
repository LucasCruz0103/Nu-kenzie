import "./style.css";
export function Card({ transaction, index, callBack, list }) {
  function apagando() {
    callBack(list.filter((event) => event !== transaction));
  }
  return (
    <>
      {transaction.type === "entrada" ? (
        <li key={index} className="corEntrada">
          <section className="salarioDeEntrada">
            <h2>{transaction.description}</h2>
            <p>{transaction.type}</p>
          </section>
          <section className="excluido">
            <p>R$ {transaction.value},00</p>
            <button onClick={apagando}>&#128465;</button>
          </section>
        </li>
      ) : (
        <li key={index}>
          <section className="salarioDeEntrada">
            <h2>{transaction.description}</h2>
            <p>{transaction.type}</p>
          </section>
          <section className="excluido">
            <p>R$ {transaction.value},00</p>
            <button onClick={apagando}>&#128465;</button>
          </section>
        </li>
      )}
    </>
  );
};
