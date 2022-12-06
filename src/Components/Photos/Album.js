import '../Styles/Photos/Album.css';
const Album = ({srcImg, link, titulo})=>{
    return (
        <div className="album">
            <a href={srcImg} target='_blank'>
                <img src={srcImg}/>
            </a>
            <p>{titulo}</p>
            <a href={link} target='_blank'>GO TO ALBUM</a>
        </div>
    )
}
export default Album;