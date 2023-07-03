import { useEffect, useState } from 'react';
import '../Styles/Store/StoreSection.css';
import GoToStore from './GoToStore';
import GroupStore from './GroupStore';
// Imagenes del Store
const StoreSection = ()=>{
    const [dataStore, setDataStore] = useState({});
    useEffect(()=>{
        setDataStore({
            clothes:[
                { 
                    name: 'Playera De Lirio M', 
                    price: 'Proximamente...', 
                    discount: 0, 
                    image: '/Tienda/T-Shirt.jpg', 
                    link: '#tiendaRopa'
                },
                { 
                    name: 'Playera De Lirio RENACER M', 
                    price: 'Proximamente...', 
                    discount: 0, 
                    image: '/Tienda/T-Shirt.jpg', 
                    link: '#tiendaRopa'
                },
            ]
        })
    },[])
    return (
        <div className="StoreSection">
            <div className='header'>
                Tienda De Lirio (Proximamente...)
            </div>
            <GroupStore 
                id = { 'tiendaRopa' } 
                title = { 'Ropa' } 
                data = { dataStore.clothes }/>
            <GoToStore/>
        </div>
    )
}
export default StoreSection;