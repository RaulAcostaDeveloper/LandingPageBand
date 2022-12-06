import portadaImagen from '../../images/portada-imagen.jpg';

import '../Styles/Header/PortadaImagen.css';
const PortadaImagen = ()=>{
    return (
        <div className='PortadaImagen'>
            <img src={portadaImagen} alt='Portada imagen'/>
        </div>
    )
}
export default PortadaImagen;