import { useEffect } from 'react';
import Footer from '../Footer/Footer';
import '../Styles/MenuDesplegable/MenuDesplegable.css';
import BotonClose from './BotonClose';
import SeccionMenu from './SeccionMenu';
import SubSeccionMenu from './SubSeccionMenu';
const MenuDesplegable = ({isOpen, handleOpen})=>{
    useEffect(()=>{
        // ¿Cómo lo mejoro?
        const item  = document.getElementById('menuDesplegable');
        item.style.display='none';
    },[])
    useEffect(()=>{
        const item  = document.getElementById('menuDesplegable');
        if (isOpen) {
            item.style.display='block';
            item.style.animationName="openMenu";
            item.style.animationDuration="500ms";
            item.style.animationFillMode="initial";
        } else {
            item.style.animationName="closeMenu";
            item.style.animationDuration="500ms";
            item.style.animationFillMode="initial";
            setTimeout(() => {
                item.style.display='none';
            }, 300);
        }
    },[isOpen]);
    return (
        <>
            <div className='MenuDesplegable' id='menuDesplegable'>
                <BotonClose handleOpen={handleOpen}/>
                <SeccionMenu nombre='Met Store'>
                    <SubSeccionMenu titulo={'Clothing'}/>
                    <SubSeccionMenu titulo={'Music'}/>
                    <SubSeccionMenu titulo={'Accesories'}/>
                    <SubSeccionMenu titulo={'Collaborations'}/>
                    <SubSeccionMenu titulo={'Books & Mags'}/>
                    <SubSeccionMenu titulo={'Gifts'}/>
                    <SubSeccionMenu titulo={'Packs'}/>
                </SeccionMenu>
                <SeccionMenu nombre='News'>
                    <SubSeccionMenu titulo={'Most recent news'}/>
                    <SubSeccionMenu titulo={'Most important news'}/>
                </SeccionMenu>
                <SeccionMenu nombre='Tour'>
                    <SubSeccionMenu titulo={'Upcoming dates'}/>
                    <SubSeccionMenu titulo={'Historical dates'}/>
                </SeccionMenu>
                <SeccionMenu nombre='Band'>
                    <SubSeccionMenu titulo={'Time line'}/>
                    <SubSeccionMenu titulo={'Our history'}/>
                </SeccionMenu>
                <SeccionMenu nombre='Music'>
                    <SubSeccionMenu titulo={'Releases'}/>
                    <SubSeccionMenu titulo={'Songs & Lyrics'}/>
                </SeccionMenu>
                <SeccionMenu nombre='Media'>
                    <SubSeccionMenu titulo={'Videos'}/>
                    <SubSeccionMenu titulo={'Photos'}/>
                    <SubSeccionMenu titulo={'Poadcast'}/>
                    <SubSeccionMenu titulo={'Documentary films'}/>
                </SeccionMenu>
                <SeccionMenu nombre='Fan Club'>
                    <SubSeccionMenu titulo={'News'}/>
                    <SubSeccionMenu titulo={'Videos'}/>
                    <SubSeccionMenu titulo={'Photos'}/>
                    <SubSeccionMenu titulo={'Questions'}/>
                    <SubSeccionMenu titulo={'Become a member'}/>
                </SeccionMenu>
                <Footer/>
            </div>
        </>

    )
}
export default MenuDesplegable;