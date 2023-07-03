import '../Styles/NewsSection/NewsSection.css';
import New from './New';

const NewsSection = ()=>{
    return (
        <div className='NewsSection'>
            <div className='header'>
                Noticias De Lirio
            </div>
            <div id='noticiasRecientes'>
                <h3>Noticias recientes</h3>
            </div>
            <div className='news'>
                <New
                    date={ '02 julio 2023' } 
                    img={ '/imagenes/entrevista.png' } 
                    title={ 'Entrevista con Radio Futura' }
                    link={ 'https://youtu.be/iADGcH_qKxM' }
                    />
                <New 
                    date={ '24 junio 2023' } 
                    img={ '/imagenes/ganamosGuerraBandas.jpg' } 
                    title={ 'Ganamos el segundo lugar de la guerra de bandas' }
                    link={ 'https://www.facebook.com/CiiaLoveeh/posts/pfbid02uC9qQznMydfDhuczCRPwY19hfA36sGasHfaPTrqoEPjCmN68zFf7YurWKKyZExyBl' }
                    />
                <New 
                    date={ '10 junio 2023' } 
                    img={ '/imagenes/debut.png' } 
                    title={ 'Nuestro debut participando en la guerra de bandas' }
                    link={ 'https://www.facebook.com/paulinaguilarxD/videos/629898992530561' }
                    />
            </div>
            <div id='noticiasPopulares'>
                <h3>Noticias populares</h3>
                <div className='news'>
                    <New 
                        date={ '?? ?? 202?' } 
                        img={ '/imagenes/albumRenacer.jpg' } 
                        title={ 'Estreno del album RENACER' }
                        link={ '/imagenes/albumRenacer.jpg' }
                        />
                </div>
            </div>
        </div>
    )
}
export default NewsSection;