import '../Styles/IconosSociales/IconoSocial.css';

const IconoSocial = ({ruta, liga})=>{
    return (
        <div className='IconoSocial'>
            <a href={liga} target='_blank'>
                <img src={ruta} alt='Red social' title='Ir a red social'/>
            </a>
        </div>
    )
}
export default IconoSocial;