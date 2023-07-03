import '../Styles/IconosSociales/IconosSociales.css';
import IconoSocial from './IconoSocial';
const IconosSociales = () => {
    return (
        <div className='IconosSociales'>
            <IconoSocial id={ 'facebook' } ruta='./facebook.png' liga='https://www.facebook.com/DeLirioOficialMX'/>
            <IconoSocial id={ 'instagram' } ruta='./instagram.png' liga='https://www.instagram.com/deliriomxoficial/'/>
            <IconoSocial id={ 'tiktok' } ruta='./tik-tok.png' liga='https://www.tiktok.com/@de.liriooficial?_t=8dgbbypycr7&_r=1'/>
            <IconoSocial id={ 'youtube' } ruta='./youtube.png' liga='#videos'/>
            <IconoSocial id={ 'spotify' } ruta='./spotify.png' liga='#audios'/>
            {/* <IconoSocial ruta='./instagram.png' liga='#'/>
            <IconoSocial ruta='./twitter.png' liga='#'/>
            <IconoSocial ruta='./apple.png' liga='#'/> */}

        </div>
    )
}
export default IconosSociales;