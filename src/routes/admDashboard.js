import React from 'react';
import { Footer } from '../components/footer';
import { NavigationBar } from '../components/navbar';



export default function Admin(){
   
    return (
        <div className="admin-container">
            <NavigationBar/>
            <heading className="titulo-membros">Controle de membros</heading>
            
            <Footer/>
        </div>
    )
}

