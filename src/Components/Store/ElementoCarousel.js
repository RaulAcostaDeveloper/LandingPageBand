import '../Styles/Store/ElementoCarousel.css';
const ElementoCarousel=({elemento})=>{
    return (
        <div className="elementoCarousel">
            <div className='contenedorImagen'>
                <img src={elemento.image} alt={elemento.name}/>
            </div>
            <div className="name">
                {elemento.name}
            </div>
            {elemento.discount?
                <div className="price">
                    <span>{elemento.price} </span>
                    {(elemento.price)-( elemento.price / elemento.discount)}
                </div>
                    :
                <div className="price">
                    {elemento.price}
                </div>
            }
            <div className='goToStore'>
                <a href={elemento.link} target='_blank'>
                    I WANT IT
                </a>
            </div>
        </div>
    )
}
export default ElementoCarousel;