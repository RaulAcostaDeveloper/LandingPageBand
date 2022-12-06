import '../Styles/Header/BotonMenu.css';

const BotonSearch = ({handleOpen})=>{
    return (
        <div className="botonMenu">
            <button onClick={()=>handleOpen()}>
                <img src="./search.png" alt="Boton Menú"/><span className='nombreBoton'>Buscar</span></button>
        </div>
    )
}
export default BotonSearch;