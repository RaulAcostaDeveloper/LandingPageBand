import '../Styles/Videos/Video.css';
const Video = ({source, description, poster, esPrincipal, link})=>{
    return (
        <div className={esPrincipal?'principalVideo video': 'video'}>
            <video src={source} poster={poster} controls/>
            <p>{description}</p>
            <div className='link'>
                <a href={link} target='_blank'>SEE ON YOUTUBE</a>
            </div>
        </div>
    )
}
export default Video;