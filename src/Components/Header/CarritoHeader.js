import '../Styles/Header/BotonMenu.css';

const CarritoHeader = ()=>{
    return (
        <div className="botonMenu">
            <button>
                <a href='#tiendaRopa'>
                    <img src="./shopping-cart.png" alt="Boton Menú"/>
                    <span className='nombreBoton'>Shop</span>
                </a>
            </button>
        </div>
    )
}
export default CarritoHeader;