import '../Styles/TourDates/TourDatesSection.css';
import TourDate from './TourDate';
const TourDatesSection = ()=>{
    return (
        <div className='TourDatesSection'>
            <div className='header'>
                Fechas eventos De Lirio
            </div>
            <div className='titulo' id='proximosEventos'>
                <h2>Próximos eventos...</h2>
            </div>
            <div className='fechas'>
                <TourDate
                    date = { { month:'septiembre', day:'02', year:'2023' } }
                    title = { 'Splash 2023' }
                    description = { 'Evento oficial de presentación del album.' }
                    linkInfo = { 'https://landing-page-band.vercel.app/' }
                    linkBuyTickets = { 'https://landing-page-band.vercel.app/' }
                    isSoldOut = { false }
                    direccion = { 'Club de playa Oasis 16 Barco Viejo Veracruz, VER 94298.' }
                    flyer = { './Flyers/02septiembre.jpg' }
                />
            </div>
            <div className='titulo' id='antiguosEventos'>
                <h2>Antiguos eventos...</h2>
            </div>
            <div className='fechas'>
                <TourDate
                    date = { { month:'junio', day:'10', year:'2023' } }
                    title = { 'Guerra de bandas, eliminatorias.' }
                    description = { 'Primer evento debut de lirio' }
                    linkInfo = { 'https://landing-page-band.vercel.app/' }
                    linkBuyTickets = { 'https://landing-page-band.vercel.app/' }
                    isSoldOut = { true }
                    flyer = { './Flyers/10junio.jpg' }
                />
                <TourDate
                    date = { { month:'junio', day:'29', year:'2023' } }
                    title = { 'Final de guerra de bandas' }
                    description = { 'Ganamos el segundo lugar' }
                    linkInfo = { 'https://landing-page-band.vercel.app/' }
                    linkBuyTickets = { 'https://landing-page-band.vercel.app/' }
                    isSoldOut = { true }
                    flyer = { './Flyers/24junio.jpg' }
                />
            </div>
        </div>
    )
}
export default TourDatesSection;