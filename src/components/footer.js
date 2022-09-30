import React from "react";
import logo from '../assets/Earthy.svg';
import { Link } from "react-router-dom";

export function Footer(){
    return(
        <div className="footer-container">
            <div className="f-left">
                <div className="f-logo-nome">
                    <h3 className="f-title"><Link style={{textDecoration: 'none',color: "#fffbf4" }} to="/">In Via Jr</Link></h3>
                    <img src={logo} className="f-logo" alt="logo"/>
                </div>
            </div>

            <div className="f-mid">
                <p>Desenvolvedor:</p>
                <p>Fernando Giardini</p>
                <p>22 anos</p>
                <p>https://github.com/FernandoGiardini</p>
                <p>2022 - Todos os direitos reservados</p>
            </div>

            
            <div className="f-right">
                <p>Venha nos visitar!</p>
                <iframe title="gmap_canvas" width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=UFJF&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>

        </div>
    )
}