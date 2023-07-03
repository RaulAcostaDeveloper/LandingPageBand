import '../Styles/Videos/VideosSection.css';
import Videos from './Videos';
const VideosSection = ()=>{
    return (
        <div className="VideosSection" id='videos'>
            <div className="header">
                Videos De Lirio
            </div>
            <div className='subscribete'>
                <a href='#videos'   rel="noreferrer">Subscribete a nuestro canal de Youtube</a>
            </div>
            <Videos/>
            <div className='visitOurChannel'>
                <a href='#videos'   rel="noreferrer">VISITA NUESTRO CANAL</a>
            </div>
        </div>
    )
}
export default VideosSection;