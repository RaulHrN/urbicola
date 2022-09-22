import { Instagram, LinkedIn } from "@mui/icons-material";
import { Link, Button, TextField } from "@mui/material";
import React from "react";
import "./contato.css";

export const Contato = () => {
    

    return (
        <section className="pages contato-page">
            <h1 className="page-title">Fale Conosco</h1>
            <section className="contato-info-body">
                <section className="contato-info">
                    <p>(11) 9 5166-9911</p>
                    <p>(11) 9 7607-9109</p>
                    <p>(11) 9 4452-6077</p>
                    <p>contato@urbicola.com.br</p>
                    <div className="contato-social">
                        <Link><Instagram className="instagram social-icon"/></Link>
                        <Link><LinkedIn className="linkedin social-icon"/></Link>
                    </div>
                </section>

                <section className="contato-form">
                    <TextField variant="outlined" type="text" label="Nome..." className="form-input" fullWidth/>
                    <TextField variant="outlined" type="text" label="Telefone..." className="form-input" fullWidth/>
                    <TextField variant="outlined" type="email" label="Email..." className="form-input" fullWidth/>
                    <TextField variant="outlined" label="Digite aqui..." multiline className="form-input" fullWidth/>
                    <Button style={{fontSize: "20px", boxShadow: "none"}}variant="contained" type="submit" className="form-button" fullWidth>Enviar</Button>
                </section>
            </section>
        </section>
    )
}