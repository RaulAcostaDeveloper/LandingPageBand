import { useEffect } from 'react';
import '../Styles/Store/Carousel.css';
import ElementoCarousel from './ElementoCarousel';
const Carousel = ({data=[]})=>{
    useEffect(()=>{
        console.log(data);
    },[data])
    return (
        <div className='carousel'>
            <div className='inside'>
                {/* <div className='buttonLeft'>
                    <button>
                        <img src='./left-arrow.png'/>
                    </button>
                </div>
                <div className='buttonRight'>
                    <button>
                        <img src='./right-arrow.png'/>
                    </button>
                </div> */}
                <div className='elementos'>
                    {(data.length>0&&
                    <>
                    {data.map( elemento => {
                        return (
                            <ElementoCarousel elemento={elemento} key={elemento.name}/>
                        )
                    })}
                    </>
                    )}
                </div>
            </div>
        </div>
    )
}
export default Carousel;