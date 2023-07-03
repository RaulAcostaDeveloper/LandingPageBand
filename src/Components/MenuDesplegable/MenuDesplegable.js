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
                <BotonClose handleOpen={ handleOpen }/>
                <SeccionMenu nombre='Tours'>
                    <SubSeccionMenu 
                        titulo={ 'Próximos tours' } 
                        liga={ '#proximosEventos' }
                        handleOpen={ handleOpen }/>
                    <SubSeccionMenu 
                        titulo={ 'Antiguos tours' } 
                        liga={ '#antiguosEventos' }
                        handleOpen={ handleOpen }/>
                </SeccionMenu>
                <SeccionMenu nombre='Sobre nosotros'>
                    <SubSeccionMenu 
                        titulo={ 'Quienes somos' }
                        liga={ '#quienesSomos' }
                        handleOpen={ handleOpen }/>
                    <SubSeccionMenu 
                        titulo={ 'Nuestra historia' }
                        liga={ '#nuestraHistoria' }
                        handleOpen={ handleOpen }/>
                </SeccionMenu>
                <SeccionMenu nombre='Tienda'>
                    <SubSeccionMenu 
                        titulo={ 'Ropa' }
                        liga={ '#tiendaRopa' }
                        handleOpen={ handleOpen }/>
                    {/* <SubSeccionMenu 
                        titulo={'Música'}
                        handleOpen={ handleOpen }/>
                    <SubSeccionMenu 
                        titulo={'Accesorios'}
                        handleOpen={ handleOpen }/> */}
                </SeccionMenu>
                <SeccionMenu nombre='Noticias'>
                    <SubSeccionMenu 
                        titulo={'Noticias recientes'}
                        liga={ '#noticiasRecientes' }
                        handleOpen={ handleOpen }/>
                    <SubSeccionMenu 
                        titulo={'Noticias populares'}
                        liga={ '#noticiasPopulares' }
                        handleOpen={ handleOpen }/>
                </SeccionMenu>
                <SeccionMenu nombre='Música'>
                    <SubSeccionMenu 
                        titulo={'Lanzamientos'}
                        liga={ '#lanzamientos' }
                        handleOpen={ handleOpen }/>
                    <SubSeccionMenu 
                        titulo={'Canciones & Lyrics'}
                        liga={ '#cancionesLyrics' }
                        handleOpen={ handleOpen }/>
                </SeccionMenu>
                <SeccionMenu nombre='Media'>
                    <SubSeccionMenu 
                        titulo={'Videos'}
                        liga={ '#videos' }
                        handleOpen={ handleOpen }/>
                    <SubSeccionMenu 
                        titulo={'Fotos'}
                        liga={ '#fotos' }
                        handleOpen={ handleOpen }/>
                    <SubSeccionMenu 
                        titulo={'Audios'}
                        liga={ '#audios' }
                        handleOpen={ handleOpen }/>
                </SeccionMenu>
                <SeccionMenu nombre='Redes sociales'>
                    <SubSeccionMenu 
                        target={ '_blank' }
                        titulo={'Facebook'}
                        liga={ 'https://www.facebook.com/DeLirioOficialMX' }
                        handleOpen={ handleOpen }/>
                    <SubSeccionMenu 
                        target={ '_blank' }
                        titulo={'Instagram'}
                        liga={ 'https://www.instagram.com/deliriomxoficial/' }
                        handleOpen={ handleOpen }/>
                    <SubSeccionMenu 
                        target={ '_blank' }
                        titulo={'Tik Tok'}
                        liga={ 'https://www.tiktok.com/@de.liriooficial?_t=8dgbbypycr7&_r=1' }
                        handleOpen={ handleOpen }/>
                    <SubSeccionMenu 
                        titulo={'Youtube'}
                        liga={ '#youtube' }
                        handleOpen={ handleOpen }/>
                    <SubSeccionMenu 
                        titulo={'Spotify'}
                        liga={ '#spotify' }
                        handleOpen={ handleOpen }/>
                </SeccionMenu>
                <Footer/>
            </div>
        </>

    )
}
export default MenuDesplegable;