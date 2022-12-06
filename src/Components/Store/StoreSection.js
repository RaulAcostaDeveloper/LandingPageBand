import { useEffect, useState } from 'react';
import '../Styles/Store/StoreSection.css';
import GoToStore from './GoToStore';
import GroupStore from './GroupStore';
// Imagenes del Store
import TShirt from '../../images/Shop/T-Shirt.jpg';
const StoreSection = ()=>{
    const [dataStore, setDataStore] = useState({});
    useEffect(()=>{
        setDataStore({
            clothes:[
                { 
                    name: 'SINGLE T-SHIRT M', 
                    price: 20.99, 
                    discount: 0, 
                    image: TShirt, 
                    link: 'https://www.linkedin.com/in/raulacostaservicio/'
                },
                { 
                    name: 'SINGLE T-SHIRT G', 
                    price: 20.99, 
                    discount: 10, 
                    image: TShirt, 
                    link: 'https://www.linkedin.com/in/raulacostaservicio/'
                },
                { 
                    name: 'SINGLE T-SHIRT CH', 
                    price: 20.99, 
                    discount: 0, 
                    image: TShirt, 
                    link: 'https://www.linkedin.com/in/raulacostaservicio/'
                },
                { 
                    name: 'SINGLE T-SHIRT A', 
                    price: 20.99, 
                    discount: 10, 
                    image: TShirt, 
                    link: 'https://www.linkedin.com/in/raulacostaservicio/'
                },
            ]
        })
    },[])
    return (
        <div className="StoreSection">
            <div className='header'>
                Store
            </div>
            <GroupStore title={'Clothes'} data={dataStore.clothes}/>
            <GoToStore/>
        </div>
    )
}
export default StoreSection;