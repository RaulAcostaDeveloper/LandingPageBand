import { useState } from 'react';
import '../Styles/Buscador/InputBuscador.css';
const InputBuscador = ({filtro, setFiltro})=>{
    return (
        <div className="InputBuscador">
            <div className="contenedor">
                <img src="./buscar.png"/>
                <input type={'text'} value={filtro} onChange={(e)=>setFiltro(e.target.value)}/>
            </div>
        </div>
    )
}
export default InputBuscador;