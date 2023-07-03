import '../Styles/Videos/Video.css';
const Video = ({ source, titulo, descripcion, poster, esPrincipal, link, esGif })=>{
    return (
        <div className={ esPrincipal ? 'video principalVideo': 'video' }>
            { esGif ? 
                <img src={ source } alt={ titulo }/>
                :
                <video src={ source } poster={ poster } controls/>
            }
            <h4>{ titulo }</h4>
            <p>{ descripcion }</p>
            { link &&
                <div className='link'>
                    <a href={ link } target='_blank'>Ver en Youtube</a>
                </div>
            }
        </div>
    )
}
export default Video;