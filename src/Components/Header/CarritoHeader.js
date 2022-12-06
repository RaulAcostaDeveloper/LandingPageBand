import '../Styles/Header/BotonMenu.css';

const CarritoHeader = ()=>{
    return (
        <div className="botonMenu">
            <button><img src="./shopping-cart.png" alt="Boton Menú"/><span className='nombreBoton'>Shop</span></button>
        </div>
    )
}
export default CarritoHeader;