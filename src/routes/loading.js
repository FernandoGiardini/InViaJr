import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/Earthy.svg';
import bgImage from '../assets/invstars.png';




export function Loading() {
    return (
      <header flex={1} className="Loading-header" > 
        <img src={logo} className="App-logo" alt="logo" />
        <p className="no-route-msg" style={{color: `#ffffff`}}>
          Não encontramos nada aqui... 
           Tem certeza que é o endereço certo?
          <Link style={{textDecoration: 'none', wordBreak: 'break-word'}} to="/"> Voltar para casa</Link>
        </p>
        <div className="container" style={{
            backgroundImage:`url(${bgImage})`
          }}>
        </div>
      </header>
    )
}