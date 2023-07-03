import '../Styles/NewsSection/New.css';
const New = ({ img, date, title, link })=>{
    return (
        <a className='new' href={ link } target='_blank'>
            <img src={ img } alt={ img }/>
            <div className='info'>
                <div className='date'>
                    {date}
                </div>
                <div className='title'>
                    {title}
                </div>
            </div>
        </a>
    )
}
export default New;