import React from "react";
import blade from "../assets/blade.jfif";

export function Pcard(props){
    return(
    <div class="polaroid">
        <img src={blade} alt="Pulpit rock" width="284" height="213"/>
        <p class="caption">Nome:{props.name}</p>
        <p class="caption">E-mail: {props.email}</p>
        <p class="caption">Departamento(s):{props.departamentos.map((dep)=> <p>
            {dep}
        </p>)}</p>
        <p class="caption">Cargo: {props.cargo}</p>
        <p class="caption">Aniversário: {props.aniversario}</p>
    </div>
    )
}