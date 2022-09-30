import React from "react";
import logo from '../assets/Earthy.svg';
import { Link } from "react-router-dom";


export function NavigationBar(){
    return(
        <div className="navbar-container">
            <div className="logo-nome">
                <h3 className="logo-title"><Link style={{textDecoration: 'none',color: "#fffbf4" }} to="/">In Via Jr</Link></h3>
                <img src={logo} className="Nav-logo" alt="logo"/>
            </div>
            <div>
                <p className="slogan">Viajar, sem estressar, pra todo lugar.</p>
            </div>
            <div className="nav-menu">
                <Link style={{textDecoration: 'none'}} to="/"><p>Home</p></Link>
                <Link style={{textDecoration: 'none'}} to="/membros"><p>Membros</p></Link>
                <Link style={{textDecoration: 'none'}} to="/login"><p>Login</p></Link>
            </div>
        </div>
    )
}