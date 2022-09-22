import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
// eslint-disable-next-line
import "swiper/css/bundle";
import "./Projetos.css";
import { getData } from "../../services/dataUrbicola";

export const Projetos = () => {
  const dataUrbicola = getData();
  
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
        {dataUrbicola.projetos.map((projeto) => {
            return (
                <SwiperSlide><button>{projeto.titulo}</button></SwiperSlide>
            )
        })}
      </Swiper>
    </section>
  );
};
