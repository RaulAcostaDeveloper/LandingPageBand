import { useState } from "react";
import Buscador from "./Components/Buscador/Buscador";
import Footer from "./Components/Footer/Footer";

import Header from "./Components/Header/Header";
import IconosSociales from "./Components/IconosSociales/IconosSociales";
import MenuDesplegable from "./Components/MenuDesplegable/MenuDesplegable";
import NewsSection from "./Components/NewsSection/NewsSection";
import PhotosSection from "./Components/Photos/PhotosSection";
import StoreSection from "./Components/Store/StoreSection";
import TourDatesSection from "./Components/TourDatesSection/TourDatesSection";
import VideosSection from "./Components/Videos/VideosSection";
import './Colores.css';
import SomosDeLirio from "./Components/SomosDeLirio/SomosDeLirio";
function App() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenBuscar, setIsOpenBuscar] = useState(false);

  const handleOpenMenu = ()=>{
      setIsOpenMenu(!isOpenMenu)
  }
  const handleOpenBuscar = ()=>{
    setIsOpenBuscar(!isOpenBuscar)
}
  return (
    <div className="App">
      <Header handleOpenMenu={handleOpenMenu} handleOpenBuscar={handleOpenBuscar}/>
      <MenuDesplegable isOpen={isOpenMenu} handleOpen={handleOpenMenu}/>
      <Buscador isOpen={isOpenBuscar} handleOpen={handleOpenBuscar}/>
      <TourDatesSection/>
      <NewsSection/>
      <StoreSection/>
      <VideosSection/>
      <PhotosSection/>
      <SomosDeLirio/>
      <Footer/>
      <IconosSociales/>
    </div>
  );
}

export default App;
