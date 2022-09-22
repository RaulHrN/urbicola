import { Link } from "@mui/material";
import React from "react";
import "./header.css";
import logoBanner from "../../assets/vectors/logo-banner.svg";

export const Header = () => {
    return(
        <header className="header">
        <Link href="/" underline="none">
          <img src={logoBanner} alt="Inicio" />
        </Link>
        <nav>
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
        </nav>
      </header>
    )
}