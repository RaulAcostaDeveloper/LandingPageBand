import { useEffect, useState } from 'react';
import BotonClose from '../MenuDesplegable/BotonClose';
import SubSeccionMenu from '../MenuDesplegable/SubSeccionMenu';
import '../Styles/Buscador/Buscador.css';
import '../Styles/MenuDesplegable/MenuDesplegable.css';
import InputBuscador from './InputBuscador';

const Buscador = ({isOpen, handleOpen})=>{
    const [filtro, setFiltro] = useState('');
    const [elementosMenu, setElementosMenu] = useState([]);
    const [elementosFiltrados, setElementosFiltrados] = useState([]);
    useEffect(()=>{
        // ¿Cómo lo mejoro?
        const item  = document.getElementById('buscadorDesplegable');
        item.style.display='none';
        // Elementos del menú para el filtro
        setElementosMenu([
            { titulo: 'News'},
            { titulo: 'Photos'},
            { titulo: 'Questions'},
            { titulo: 'Become a member'},
            { titulo: 'Videos'},
            { titulo: 'Poadcast'},
            { titulo: 'Documentary films'},
            { titulo: 'Releases'},
            { titulo: 'Songs & Lyrics'},
            { titulo: 'Time line'},
            { titulo: 'Our history'},
            { titulo: 'Upcoming dates'},
            { titulo: 'Historical dates'},
            { titulo: 'Most recent news'},
            { titulo: 'Most important news'},
            { titulo: 'Clothing'},
            { titulo: 'Music'},
            { titulo: 'Accesories'},
            { titulo: 'Collaborations'},
            { titulo: 'Books & Mags'},
            { titulo: 'Gifts'},
            { titulo: 'Packs'}
        ]);
    },[]);
    useEffect(()=>{
        const item  = document.getElementById('buscadorDesplegable');
        if (isOpen) {
            item.style.display='block';
            item.style.animationName="openMenu";
            item.style.animationDuration="500ms";
            item.style.animationFillMode="initial";
            setElementosFiltrados(elementosMenu); //Pone todos los elementos sin filtrar
        } else {
            item.style.animationName="closeMenu";
            item.style.animationDuration="500ms";
            item.style.animationFillMode="initial";
            setTimeout(() => {
                item.style.display='none';
            }, 300);
        }
    },[isOpen]);

    useEffect(()=>{
        if (elementosMenu) {
            let elementosTemp = elementosMenu.map((el)=>el);
            elementosTemp = elementosTemp.filter((el)=> (el.titulo.toLocaleLowerCase().includes(filtro)));
            setElementosFiltrados(elementosTemp);
        }
    },[filtro])
    return (
        <div className='MenuDesplegable' id='buscadorDesplegable'>
            <BotonClose handleOpen={handleOpen}/>
            <InputBuscador filtro={filtro} setFiltro={setFiltro} />
            <div className='elementosBuscador'>
                {elementosFiltrados.map((el)=>
                    <SubSeccionMenu key={el.titulo} titulo={el.titulo}/>
                )}
            </div>
        </div>
    )
}
export default Buscador;