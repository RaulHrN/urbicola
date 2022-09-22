import React from "react";
import "./servicosCard.css";

interface ServicoInfo {
  id?: number;
  imagem?: string;
  resumo?: string;
  titulo?: string;
}

export const ServicosCard = (props: ServicoInfo) => {
  return (
    <article className="servico-card-body" key={props.id}>
      <img src={require(`../../assets/images/servicos/${props.imagem}`)} alt={props.titulo} 
        className="servico-banner"
      />
      <div className="servico-info">
        <p className="servico-info-title">{props.titulo}</p>
        <span className="servico-info-resume">{props.resumo}</span>
      </div>
    </article>
  );
};
