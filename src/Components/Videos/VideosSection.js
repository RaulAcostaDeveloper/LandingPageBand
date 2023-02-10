import '../Styles/Videos/VideosSection.css';
import Videos from './Videos';
const VideosSection = ()=>{
    return (
        <div className="VideosSection">
            <div className="header">
                Videos De Lirio
            </div>
            <div className='subscribete'>
                <a href='https://landing-page-band.vercel.app/' target='_blank'  rel="noreferrer">Subscribete a nuestro canal de Youtube</a>
            </div>
            <Videos/>
            <div className='visitOurChannel'>
                <a href='https://landing-page-band.vercel.app/' target='_blank'  rel="noreferrer">VISIT OUR CHANNEL</a>
            </div>
        </div>
    )
}
export default VideosSection;