import '../Styles/Store/GroupStore.css';
import Carousel from './Carousel';
const GroupStore = ({title, data, id})=>{
    return(
        <div className="groupStore" id = { id }>
            <div className="header">
                {title}
            </div>
            <Carousel data={data}/>
        </div>
    )
}
export default GroupStore;