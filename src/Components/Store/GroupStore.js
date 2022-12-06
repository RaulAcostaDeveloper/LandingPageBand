import '../Styles/Store/GroupStore.css';
import Carousel from './Carousel';
const GroupStore = ({title, data})=>{
    return(
        <div className="groupStore">
            <div className="header">
                {title}
            </div>
            <Carousel data={data}/>
        </div>
    )
}
export default GroupStore;