import '../Styles/Photos/PhotosSection.css';
// Imagenes de album
import portada1 from '../../images/Albums/photo3.jpg';
import portada2 from '../../images/Albums/cqwnpen.jpg';
import portada3 from '../../images/Albums/DSCF7141.jpg';
import portada4 from '../../images/Albums/qpwcbnqpw.jpg';
import portada5 from '../../images/Albums/qwdniqw0ndwqpdn.jpg';

import { useEffect, useState } from 'react';
import Album from './Album';
const PhotosSection = ()=>{
    const [data, setData] = useState([]);
    useEffect(()=>{
        setData([
            {
                srcImg:portada1,
                link:'https://landing-page-band.vercel.app/',
                titulo:'Sesión de fotos grabación RENACER',
            },
            {
                srcImg:portada5,
                link:'https://landing-page-band.vercel.app/',
                titulo:'Sesión de fotos grabación RENACER',
            },
            {
                srcImg:portada3,
                link:'https://landing-page-band.vercel.app/',
                titulo:'Sesión de fotos grabación RENACER',
            },
            {
                srcImg:portada2,
                link:'https://landing-page-band.vercel.app/',
                titulo:'Sesión de fotos grabación RENACER',
            },
            {
                srcImg:portada4,
                link:'https://landing-page-band.vercel.app/',
                titulo:'Sesión de fotos grabación RENACER',
            },
        ]);
    },[])
    return (
        <div className="PhotosSection">
            <div className='header'>
                Fotos De Lirio
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