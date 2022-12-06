import '../Styles/TourDates/TourDatesSection.css';
import TourDate from './TourDate';
const TourDatesSection = ()=>{
    return (
        <div className='TourDatesSection'>
            <div className='header'>
                Tour Dates
            </div>
            <div className='dates'>
                <TourDate
                    date={{month:'DEC', day:'16', year:'2022'}}
                    title={'Los Angeles, CA, United States'}
                    description={'All Within My Hands Helping Hands Concert & Auction @ Microsoft Theater'}
                    linkInfo={'https://raulacostadeveloper.github.io/raulacostadeveloper/'}
                    linkBuyTickets={'https://raulacostadeveloper.github.io/raulacostadeveloper/'}
                    isSoldOut={false}
                />
                <TourDate
                    date={{month:'DEC', day:'16', year:'2022'}}
                    title={'Los Angeles, CA, United States'}
                    description={'All Within My Hands Helping Hands Concert & Auction @ Microsoft Theater'}
                    linkInfo={'https://raulacostadeveloper.github.io/raulacostadeveloper/'}
                    isSoldOut={true}
                />
            </div>
        </div>
    )
}
export default TourDatesSection;