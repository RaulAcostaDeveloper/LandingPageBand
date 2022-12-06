import PortadaImagen from "./PortadaImagen";
import TopHeader from "./TopHeader";
import '../Styles/Header/Header.css';
const Header = ({handleOpenMenu, handleOpenBuscar})=>{
    return (
        <header>
            <TopHeader handleOpenMenu={handleOpenMenu} handleOpenBuscar={handleOpenBuscar}/>
            <PortadaImagen/>
        </header>
    )
}
export default Header;