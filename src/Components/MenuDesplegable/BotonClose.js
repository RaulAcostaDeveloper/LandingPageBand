
import '../Styles/MenuDesplegable/BotonClose.css';
const BotonClose=({handleOpen})=>{
    return (
        <div className='BotonClose' onClick={()=>handleOpen()}>
            <button >
                <img src='x.png' alt='close'/>
                Close
            </button>
        </div>
    )
}
export default BotonClose;