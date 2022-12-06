import '../Styles/Videos/VideosSection.css';
import Videos from './Videos';
const VideosSection = ()=>{
    return (
        <div className="VideosSection">
            <div className="header">
                Videos
            </div>
            <div className='subscribete'>
                <a href='https://raulacostadeveloper.github.io/raulacostadeveloper/' target='_blank'>Subscribete a nuestro canal de Youtube</a>
            </div>
            <Videos/>
            <div className='visitOurChannel'>
                <a href='https://raulacostadeveloper.github.io/raulacostadeveloper/' target='_blank'>VISIT OUT CHANNEL</a>
            </div>
        </div>
    )
}
export default VideosSection;