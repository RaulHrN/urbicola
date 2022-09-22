import { Instagram, LinkedIn } from "@mui/icons-material";
import { Link } from "@mui/material";
import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <section className="footer-body">
      <section className="footer-info">
        <section className="footer-info-card">
            <p className="footer-info-title">Urbicola Arquitetura</p>
            <p className="footer-info-text">(11) 9 5166-9911</p>
            <p className="footer-info-text">(11) 9 7607-9109</p>
            <p className="footer-info-text">(11) 9 4452-6077</p>
            <p className="footer-info-text">contato@urbicola.com.br</p>
        </section>

        <section className="footer-info-card">
        <p className="footer-info-title">Redes Sociais</p>
        <Link className="footer-info-social" href="https://www.instagram.com/urbicolaarquitetura/" underline="none">
            <Instagram className="instagram"/> <span className="footer-info-text">Instagram</span>
        </Link>
        <Link className="footer-info-social" href="" underline="none">
            <LinkedIn className="linkedin"/> <span className="footer-info-text">LinkedIn</span>
        </Link>
        </section>
      </section>

      <p className="footer-copyright">
        Copyright © <span>Urbicola Arquitetura</span> 2022
      </p>
    </section>
  );
};
