import '../Styles/Photos/PhotosSection.css';

import { useEffect, useState } from 'react';
import Album from './Album';
const PhotosSection = ()=>{
    const [data, setData] = useState([]);
    useEffect(()=>{
        setData([
            {
                srcImg:'/imagenes/PosterVideo1.jpg',
                link:'#fotos',
                titulo:'Nuestros instrumentos',
            },
            {
                srcImg:'/albunes/qwdniqw0ndwqpdn.jpg',
                link:'#fotos',
                titulo:'Fotos de Pablo Michel',
            },
            {
                srcImg:'/albunes/DSCF7141.jpg',
                link:'#fotos',
                titulo:'Fotos de Javi Cruz',
            },
            {
                srcImg:'/albunes/cqwnpen.jpg',
                link:'#fotos',
                titulo:'Fotos de Raúl Acosta',
            },
            {
                srcImg:'/albunes/qpwcbnqpw.jpg',
                link:'#fotos',
                titulo:'Fotos de Osmar Zaragosa',
            },
        ]);
    },[])
    return (
        <div className="PhotosSection" id='fotos'>
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