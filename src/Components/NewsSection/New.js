import '../Styles/NewsSection/New.css';
const New = ({img, date, title, link})=>{
    return (
        <a className='new' href={link} target='_blank'>
            <div className='img'>
                <img src={img}/>
            </div>
            <div className='date'>
                {date}
            </div>
            <div className='title'>
                {title}
            </div>
        </a>
    )
}
export default New;