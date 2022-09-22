import React from "react";
import "./founderCard.css";
import { Email, Instagram, LinkedIn } from "@mui/icons-material";
import { Link } from "@mui/material";

interface FounderInfo {
  nome?: string;
  imagem?: string;
  profissao?: string;
  resumo?: string;
  linkedin?: string;
  instagram?: string;
  email?: string;
}

export const FounderCard = (props: FounderInfo) => {
  return (
    <article className="founder-card">
      <figure className="founder-photo">
        <img src={require(`../../assets/images/fundadores/${props.imagem}`)} alt={props.nome} />
      </figure>
      <h2 className="founder-name">{props.nome}</h2>
      <div className="founder-line"></div>
      <p className="founder-job">{props.profissao}</p>
      <p className="founder-resume">{props.resumo}</p>
      <div className="founder-social">
        <Link>
          <LinkedIn className="linkedin" />
        </Link>
        <Link>
          <Instagram className="instagram" />
        </Link>
        <Link>
          <Email className="email" />
        </Link>
      </div>
    </article>
  );
};
