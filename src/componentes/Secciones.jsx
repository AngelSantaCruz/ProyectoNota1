import React from 'react'
import "../estilos/Estilos.css"
import FAQ from "../imagenes/FAQ.png";
import guia from "../imagenes/guia.png";
import ticket from "../imagenes/ticket.png";


const Secciones = () => {
  return (
    <div className = 'container'>
        <img src={FAQ} className="image"/>
        <h2>FAQ</h2>
        <img src={guia} className="image"/>
        <h2>Guia</h2>
        <img src={ticket} className="image"/>
        <h2>Ticket</h2>
        
    </div>
  )
}

export default Secciones