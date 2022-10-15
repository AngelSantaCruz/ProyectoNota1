import React from 'react'
import {useForm} from "react-hook-form";

export const Formulario = () => {

    const {register,  handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);

    }
    
  return (
    <div>
        <h2>Formulario</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Correo</label>
                <input type="text" {...register('correo')}/>
               
            </div>
            <div>
                <label>Nombre</label>
                <input type="text" {...register('nombre')}/>
            </div>
            <div>
                <label>Teléfono</label>
                <input type="text" {...register('telefono')}/>
            </div>
            <div>
                <label>Motivo</label>
                <input type="text" {...register('motivo')}/>
            </div>
            <div>
                <label>Descripción</label>
                <input type="text" {...register('descripciopn')}/>
            </div>
            <input type="submit" value="Enviar"></input>

        </form>
        
    </div>
  )
}
