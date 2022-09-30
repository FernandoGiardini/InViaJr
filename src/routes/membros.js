import React, { useEffect, useState } from "react";
import { Footer } from "../components/footer";
import { NavigationBar } from "../components/navbar";
import { Pcard } from "../components/polaroidcard";


export function Membros() {
    const [membros, setMembros] = useState([]);

    async function response(){
        const response = await fetch("http://localhost:3001/members")
        const data = await response.json()
        setMembros(data)
    }

    useEffect(()=> {
        response()
    },[])

    return(
        <div className="home-bg" flex={1}>
            <NavigationBar/>
            <heading className="titulo-membros">Conheça nossos membros!</heading>
            <div className="membros-container">
                {
                    membros.map((membro, index) => (
                        <Pcard
                            key={index}
                            name={membro.name}
                            email={membro.email}
                            aniversario={membro.aniversario}
                            departamentos={membro.departamentos}
                            cargo={membro.cargo} 
                        />
                    )
                )}
            </div>
            <Footer/>
        </div>
    )    
}