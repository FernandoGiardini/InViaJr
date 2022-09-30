import React from "react";
import { Footer } from "../components/footer";
import { NavigationBar } from "../components/navbar";
import { Link } from "react-router-dom";

export function Login() {
    return(
        <div className="home-bg" flex={1}>
            <NavigationBar/>
            <heading className="titulo-membros">Área Administrativa</heading>
            <div className="login-container">
                <div className="form">
                    <label>E-mail</label> 
                    <input type="email" className="form-control" placeholder="E-mail" />
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" />
                    <Link style={{textDecoration: 'none'}} to="/Admin"><input type="button" className="botao" value="Login"/></Link>
                </div>
            </div>
            <Footer/>
        </div>
    )    
}