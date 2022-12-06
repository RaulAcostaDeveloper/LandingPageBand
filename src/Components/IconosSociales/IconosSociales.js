import '../Styles/IconosSociales/IconosSociales.css';
import IconoSocial from './IconoSocial';
const IconosSociales = () => {
    return (
        <div className='IconosSociales'>
            <IconoSocial ruta='./facebook.png' liga='#'/>
            <IconoSocial ruta='./twitter.png' liga='#'/>
            <IconoSocial ruta='./instagram.png' liga='#'/>
            <IconoSocial ruta='./youtube.png' liga='#'/>
            <IconoSocial ruta='./spotify.png' liga='#'/>
            <IconoSocial ruta='./apple.png' liga='#'/>

        </div>
    )
}
export default IconosSociales;