import portadaImagen from '../../images/DSC_0572.JPG';

import '../Styles/Header/PortadaImagen.css';
const PortadaImagen = ()=>{
    return (
        <div className='PortadaImagen'>
            <img src={portadaImagen} alt='Portada imagen'/>
        </div>
    )
}
export default PortadaImagen;