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
                    name: 'Playera De Lirio M', 
                    price: 'Proximamente...', 
                    discount: 0, 
                    image: TShirt, 
                    link: 'https://landing-page-band.vercel.app/'
                },
                { 
                    name: 'Playera De Lirio G', 
                    price: 'Proximamente...', 
                    discount:0, 
                    image: TShirt, 
                    link: 'https://landing-page-band.vercel.app/'
                },
                { 
                    name: 'Playera De Lirio RENACER M', 
                    price: 'Proximamente...', 
                    discount: 0, 
                    image: TShirt, 
                    link: 'https://landing-page-band.vercel.app/'
                },
                { 
                    name: 'Playera De Lirio RENACER G', 
                    price: 'Proximamente...', 
                    discount:0, 
                    image: TShirt, 
                    link: 'https://landing-page-band.vercel.app/'
                },
            ]
        })
    },[])
    return (
        <div className="StoreSection">
            <div className='header'>
                Tienda De Lirio
            </div>
            <GroupStore title={'Ropa'} data={dataStore.clothes}/>
            <GoToStore/>
        </div>
    )
}
export default StoreSection;