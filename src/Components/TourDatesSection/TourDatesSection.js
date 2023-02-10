import '../Styles/TourDates/TourDatesSection.css';
import TourDate from './TourDate';
const TourDatesSection = ()=>{
    return (
        <div className='TourDatesSection'>
            <div className='header'>
                Fechas eventos De Lirio
            </div>
            <div className='dates'>
                <TourDate
                    date={{month:'--', day:'--', year:'2023'}}
                    title={'Proximamente...'}
                    description={'Evento oficial de presentación del album.'}
                    linkInfo={'https://landing-page-band.vercel.app/'}
                    linkBuyTickets={'https://landing-page-band.vercel.app/'}
                    isSoldOut={true}
                />
                <TourDate
                    date={{month:'--', day:'--', year:'2023'}}
                    title={'Proximamente...'}
                    description={'Tour Veracruz - Puebla'}
                    linkInfo={'https://landing-page-band.vercel.app/'}
                    isSoldOut={true}
                />
            </div>
        </div>
    )
}
export default TourDatesSection;