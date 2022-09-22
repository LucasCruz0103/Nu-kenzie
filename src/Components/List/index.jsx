import {Card} from "../Card";
import "./style.css";
export function List  ({ list, callBack, filtro }) {
  const listarFiltro = [...list].filter((element) => element.type === filtro || filtro === "");
 
    return (
      <ul>
        {listarFiltro.map((element, index) => (
          <Card transaction={element} key={index} callBack={callBack} list={list} />
        ))}
      </ul>
    );
};












