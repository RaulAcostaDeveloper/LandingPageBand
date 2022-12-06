import '../Styles/TourDates/ButtonActive.css';
const ButtonActive = ({title, link})=>{
    
    return (
        <div className='buttonActive'>
            <a href={link} target='_blank'>{title}</a>
        </div>
    )
}
export default ButtonActive;