import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper";
// eslint-disable-next-line
import "swiper/css/bundle";
import "./Projetos.css";
import { getData } from "../../services/dataUrbicola";
import teste from "../../assets/images/projetos/casa_guararema/casa_guararema_1.png";

interface Projeto {
  id: number;
  nome: string;
  titulo: string;
  descricao: string;
  qtd_fotos: number;
}

export const Projetos = () => {
  const dataUrbicola = getData();
  const [projetoData, setProjetoData] = useState<Projeto>({
    descricao: "",
    id: 1,
    nome: "apt_alameda_cardim",
    qtd_fotos: 14,
    titulo: "Apto Alameda Cardim",
  });

  return (
    <section className="pages">
      <h1 className="page-title">Projetos</h1>

      <Swiper
        slidesPerView={3}
        spaceBetween={50}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={false}
        navigation={true}
        modules={[Navigation]}
        className="botoes-carousel"
      >
        {dataUrbicola.projetos.map((projeto) => (
          <SwiperSlide key={projeto.id}>
            <button type="button" onClick={() => setProjetoData(projeto)}>
              {projeto.titulo}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      <article>
        <div>
          <h1>{projetoData?.titulo}</h1>
          <div className="line"></div>
          <p>{projetoData.descricao}</p>
        </div>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          keyboard={true}
          modules={[Navigation, Pagination, Keyboard]}
          className="fotos-carousel"
        >
          <SwiperSlide>
            <img
              src={teste}
              alt={projetoData.titulo}
              className="carousel-img"
            />
          </SwiperSlide>
        </Swiper>
      </article>
    </section>
  );
};
