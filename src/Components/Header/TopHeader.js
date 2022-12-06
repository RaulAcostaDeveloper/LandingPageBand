import BotonMenu from "./BotonMenu";
import BotonSearch from "./BotonSearch";
import FanClubButton from "./FanClubButton";
import CarritoHeader from "./CarritoHeader";
import LogoBandaMenu from "./LogoBandaMenu";
import '../Styles/Header/TopHeader.css';
const TopHeader = ({handleOpenMenu, handleOpenBuscar})=>{
    return (
        <div className="topHeader">
            <BotonMenu handleOpen={handleOpenMenu}/>
            <BotonSearch handleOpen={handleOpenBuscar}/>
            <LogoBandaMenu/>
            <FanClubButton/>
            <CarritoHeader/>
        </div>
    )
}
export default TopHeader;