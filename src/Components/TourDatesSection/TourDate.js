import '../Styles/TourDates/TourDate.css';
import ButtonActive from './ButtonActive';
import ButtonInactive from './ButtonInactive';
const TourDate = ({date, title, description, linkInfo, linkBuyTickets, isSoldOut})=>{
    console.log(date);
    return (
        <div className="tourDate">
            <div className="info">
                <div className="dates">
                    <div className="month">
                        {date.month}
                    </div>
                    <div className="day">
                        {date.day}
                    </div>
                    <div className="year">
                        {date.year}
                    </div>
                </div>
                <div className="information">
                    <div className="title">
                        {title}
                    </div>
                    <div className="description">
                        {description}
                    </div>
                </div>
            </div>
            <div className="buttons">
                {isSoldOut?
                <>
                    <ButtonInactive/>
                    <ButtonActive title={'MORE INFO'} link={linkInfo}/>
                </>
                :
                <>
                    <ButtonActive title={'BUY TICKETS'} link={linkBuyTickets}/>
                    <ButtonActive title={'MORE INFO'} link={linkInfo}/>
                </>
                }
            </div>
        </div>
    )
}
export default TourDate;