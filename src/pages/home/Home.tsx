import React from "react";
import { Instagram, LinkedIn } from "@mui/icons-material";
import { Link } from "@mui/material";
import "./Home.css";

export const Home = () => {
  return (
    <section className="home-body">
      <header className="home-header">
        <Link href="/" underline="none">
          Inicio
        </Link>
        <Link href="/servicos" underline="none">
          Serviços
        </Link>
        <Link href="/projetos" underline="none">
          Projetos
        </Link>
        <Link href="/sobre_nos" underline="none">
          Sobre Nós
        </Link>
        <Link href="contato" underline="none">
          Contato
        </Link>
      </header>

      <img src={require(`../../assets/images/logo-banner.png`)} alt="Urbicola Arquitetura" className="logo" />

      <section className="home-footer">
        <section className="home-footer-contact">
          <p>(11) 9 5166-9911</p>
          <p>(11) 9 7607-9109</p>
          <p>(11) 9 4452-6077</p>
          <p>contato@urbicola.com.br</p>
          <Link href="https://www.instagram.com/urbicolaarquitetura/">
            <Instagram className="instagram" />
          </Link>
          <Link>
            <LinkedIn className="linkedin" />
          </Link>
        </section>
      </section>
    </section>
  );
}
