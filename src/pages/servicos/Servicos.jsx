import React from "react";
import "./servicos.css";
import { ServicosCard } from "../../components/servicosCard/ServicosCard";
import { getData } from "../../services/dataUrbicola";

export const Servicos = () => {
  const dataUrbicola = getData();

  return (
    <section className="pages">
      <h1 className="page-title">Serviços</h1>
      <section className="servicos_cards">
        {dataUrbicola.servicos.map((servico, index) => {
          return (
            <ServicosCard
              key={index}
              imagem={servico.imagem}
              titulo={servico.titulo}
              resumo={servico.resumo}
              id={servico.id}
            />
          );
        })}
      </section>
    </section>
  );
};
