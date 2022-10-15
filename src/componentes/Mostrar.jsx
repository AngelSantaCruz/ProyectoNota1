import React from 'react'
import imagen from '../imagenes/intel.png'

import Button from 'react-bootstrap/Button';

export const Mostrar = () => {
  return (
    
    <div className = 'container'>
        <div>
            <img src={imagen} className="image"/>
            <Button variant="outline-success" >Agregar a carrito</Button>
            

        </div>
        
        <div>
            <h4>Cantidad de núcleos: 6</h4>
            <h4>Cantidad de subprocesadores: 12</h4>
            <h4>Frecuencia turbo máxima: 4.3 GHz</h4>
            <h4>Frecuencia básica: 2.9 GHz</h4>
        </div>
        
    </div>
  )
}
