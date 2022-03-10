import React, {useState, useEffect} from "react";
import Axios from "axios";

const Tarjeta = () => {

    const[personajes, setPersonajes] = useState([])

    const api = () => {
        Axios({
            url: "https://rickandmortyapi.com/api/character"
        }).then((respuesta) => {
            setPersonajes(respuesta.data.results)
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        api()
    }, [setPersonajes])


    useEffect(() => {
        window.addEventListener("keydown", (event) => {
            let busqueda = document.getElementById("idZonaBusqueda").value
            let coincidencias = []
            if(event.key === 'Enter'){
                console.log(busqueda)
                if(busqueda === ""){
                    api()
                }else{
                    personajes.map((person) => {
                
                        if(person.name.toString().toLowerCase().includes(busqueda.toString().toLowerCase())){
                            coincidencias.push(person)
                        }
                        else if(person.gender.toString().toLowerCase().includes(busqueda.toString().toLowerCase())){
                            coincidencias.push(person)
                        }
                        
                    })  
                    if(coincidencias.length>1){
                        setPersonajes(coincidencias)
                        coincidencias=[]
                    }else{
                        setPersonajes(coincidencias)
                        coincidencias=[]
                    }
                }         
            }
        }, false)
    }, [personajes])


    return( 
        <>
            { 
                personajes.map((personaje) => (
                    <div className="tarjeta" key={personaje.id}> 
                        <div className="texto_tarjeta">
                            <h3>
                                {personaje.name}
                            </h3>
                            <h3>    
                                {personaje.gender}
                            </h3>       
                        </div>
                        <img src={personaje.image} alt={personaje.name}/>
                    </div>            
                ))          
            }
        </>
    )

}

export default Tarjeta