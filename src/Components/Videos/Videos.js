import Video from "./Video";
import '../Styles/Videos/Videos.css';
import gifLogoJavi from '../../Videos/LogoAnimado.gif';
import guerraBandas10Junio from '../../Videos/guerraBandas10Junio.mp4';
import entrevistaRadioF from '../../Videos/entrevistaRadioF.mp4';
const Videos  = ()=>{
    return (
        <div className="Videos">
            <Video
                esPrincipal={ true }
                source={ gifLogoJavi }
                titulo={ 'Logo De Lirio Javi Cruz' }
                esGif= { true }/>
            <Video 
                esPrincipal={ false }
                source={ guerraBandas10Junio }
                titulo={ 'Rockanrolero 10 junio' }
                descripcion={ 'Rockanrolero en la guerra de bandas (debut de De Lirio)' }
                poster={ '/imagenes/PosterVideo1.jpg' }/>
            <Video 
                esPrincipal={ false }
                source={ entrevistaRadioF }
                titulo={ 'Entrevista Radio Futura ' }
                descripcion={ 'El 02 de julio hicimos una entrevista con Radio Futura' }
                poster={ '/imagenes/entrevista.png' }
                link={ 'https://www.youtube.com/watch?v=iADGcH_qKxM&ab_channel=RadioFuturatv' }/>
        </div>
    )
}
export default Videos;