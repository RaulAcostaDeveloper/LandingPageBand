import '../Styles/NewsSection/NewsSection.css';
import New from './New';
import News1 from '../../images/News/DSC_0517.JPG';
import News2 from '../../images/News/DSC_0533.JPG';
import News3 from '../../images/News/DSC_0558.JPG';

const NewsSection = ()=>{
    return (
        <div className='NewsSection'>
            <div className='header'>
                Noticias De Lirio
            </div>
            <div className='news'>
                <New 
                    date={'-- --, 2023'} 
                    img={News1} 
                    title={'Estreno del album RENACER'}
                    link={'https://landing-page-band.vercel.app/'}
                    />
                <New 
                    date={'-- --, 2023'} 
                    img={News2} 
                    title={'Presentación en gira estatal'}
                    link={'https://landing-page-band.vercel.app/'}
                    />
                <New 
                    date={'-- --, 2023'} 
                    img={News3} 
                    title={'Próximas giras nacionales'}
                    link={'https://landing-page-band.vercel.app/'}
                    />

            </div>
        </div>
    )
}
export default NewsSection;