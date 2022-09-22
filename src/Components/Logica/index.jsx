import "./style.css";
import imagem from "./../../Assets/imgIndex.png";
export function Logica ({ callBack }){
  return (
    <main className="logica">
      <section className="sectionLogica">
        <section className="sectionMensagem">
          <h1>
            Nu <span>Kenzie</span>
          </h1>
          <p>Centralize o controle das suas finanças</p>
          <p className="alert">de forma rápida e segura</p>
          <button onClick={callBack}>Iniciar</button>
        </section>
        <section className="imagem">
          <img src={imagem} alt="" />
        </section>
      </section>
    </main>
  );
};

