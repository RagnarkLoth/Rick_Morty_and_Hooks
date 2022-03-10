import React from "react";
import Tarjeta from "../ui/Tarjetas";

const Main = () =>{
    return(
        <>
            <header>
                <input type="text" className="zonaBusqueda" id="idZonaBusqueda"></input>
            </header>
            <main className="zonaTarjetas">
                <Tarjeta/>
            </main>

        </>
    )
}

export default Main