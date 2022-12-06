import '../Styles/Photos/PhotosSection.css';
// Imagenes de album
import portada1 from '../../images/Albums/photo3.jpg';
import portada2 from '../../images/Albums/photo5.jpg';
import portada3 from '../../images/Albums/photo11.jpg';

import { useEffect, useState } from 'react';
import Album from './Album';
const PhotosSection = ()=>{
    const [data, setData] = useState([]);
    useEffect(()=>{
        setData([
            {
                srcImg:portada1,
                link:'https://raulacostadeveloper.github.io/raulacostadeveloper/',
                titulo:'Grabación De Lirio 28 Oct 2021',
            },
            {
                srcImg:portada2,
                link:'https://raulacostadeveloper.github.io/raulacostadeveloper/',
                titulo:'Ensayos De Lirio 28 Oct 2021',
            },
            {
                srcImg:portada3,
                link:'https://raulacostadeveloper.github.io/raulacostadeveloper/',
                titulo:'Tour Xalapa De Lirio 28 Oct 2021',
            },
        ]);
    },[])
    return (
        <div className="PhotosSection">
            <div className='header'>
                Photos
            </div>
            <div className='albunes'>
                {data.map((albumInfo)=>{
                    return (
                        <Album 
                            key={albumInfo.titulo}
                            srcImg={albumInfo.srcImg} 
                            link={albumInfo.link} 
                            titulo={albumInfo.titulo}/>
                    )
                })}
            </div>
        </div>
    )
}
export default PhotosSection;