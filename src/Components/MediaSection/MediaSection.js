import PhotosSection from '../Photos/PhotosSection';
import '../Styles/MediaSection/MediaSection.css';
import VideosSection from '../Videos/VideosSection';
const MediaSection = () => {
    return (
        <div className="MediaSection">
            <div className='header'>
                Media files
            </div>
            <VideosSection/>
            <PhotosSection/>
        </div>
    )
}
export default MediaSection;