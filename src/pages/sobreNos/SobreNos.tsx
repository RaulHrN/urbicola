import React from "react";
import { FounderCard } from "../../components/founderCard/FounderCard";
import { getData } from "../../services/dataUrbicola";
import "./sobreNos.css";

export const SobreNos = () => {
    const dataUrbicola = getData();

  return (
    <section className="pages sobreNos_page">
      <h1 className="page-title">
        Sobre <span>Nós</span>
      </h1>
      <p className="team-phrase">
        “Dentro da Urbícola, cada membro é representado por uma linha, que
        juntos formam o logo equipe”
      </p>

      <section className="sobreNos-cards">
        {dataUrbicola.fundadores.map((fundador, index) => {
            return(
                <FounderCard key={index}
                imagem={fundador.imagem}
                nome={fundador.nome}
                profissao={fundador.profissao}
                resumo={fundador.resumo}
                linkedin={fundador.social.linkedin}
                instagram={fundador.social.instagram}
                email={fundador.social.email}/>
            )
        })}
      </section>
    </section>
  );
};
