import '../Styles/TourDates/TourDate.css';
import ButtonActive from './ButtonActive';
import ButtonInactive from './ButtonInactive';
const TourDate = ({ date, title, description, direccion, linkInfo, linkBuyTickets, isSoldOut, flyer })=>{
    return (
        <div className="tourDate">
            <div className="info">
                <div className="dates">
                    <div className="month">
                        { date.month }
                    </div>
                    <div className="day">
                        { date.day }
                    </div>
                    <div className="year">
                        { date.year }
                    </div>
                </div>
                <div className="information">
                    <div className="title">
                        { title }
                    </div>
                    <div className="description">
                        { description }
                    </div>
                    { direccion &&
                        <div className="direccion">
                            { direccion }
                        </div>
                    }
                </div>
            </div>
            { flyer &&
                <div className='flyerContainer'>
                    <a href = { flyer } target='_blank'>
                        <img 
                            className='flyer' 
                            src = { flyer } 
                            alt='flyer date'/>
                    </a>
                </div>
            }
            <div className="buttons">
                {isSoldOut?
                <>
                    <ButtonInactive/>
                    <ButtonActive title={ 'MÁS INFORMACIÓN' } link={ linkInfo }/>
                </>
                :
                <>
                    <ButtonActive title={ 'COMPRAR ENTRADAS' } link={ linkBuyTickets }/>
                    <ButtonActive title={ 'MÁS INFORMACIÓN' } link={ linkInfo }/>
                </>
                }
            </div>
        </div>
    )
}
export default TourDate;