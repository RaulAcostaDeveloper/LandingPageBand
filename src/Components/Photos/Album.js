import '../Styles/Photos/Album.css';
const Album = ({srcImg, link, titulo})=>{
    return (
        <div className="album">
            <a href={srcImg}>
                <img src={srcImg}/>
            </a>
            <p>{titulo}</p>
            <a href={link}>GO TO ALBUM</a>
        </div>
    )
}
export default Album;