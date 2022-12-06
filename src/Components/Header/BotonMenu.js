import '../Styles/Header/BotonMenu.css';
const BotonMenu = ({handleOpen})=>{
    return (
        <div className="botonMenu">
            <button onClick={()=>handleOpen()}>
                <img src="./menu.png" alt="Boton Menú"/><span className='nombreBoton'>Menu</span>
            </button>
        </div>
    )
}
export default BotonMenu;