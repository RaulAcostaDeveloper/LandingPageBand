import Video from "./Video";
import Video1 from '../../Videos/LogoAnimado.mp4'
import PosterVideo1 from '../../images/Videos/PosterVideo1.jpg';
import '../Styles/Videos/Videos.css';
import { useEffect, useState } from "react";
const Videos  = ()=>{
    const [data, setData] = useState([]);
    useEffect(()=>{
        setData([
            {
                description:'Logo De Lirio Javi Cruz',
                source: Video1,
                poster: PosterVideo1,
                principal: true,
                link:'https://raulacostadeveloper.github.io/raulacostadeveloper/',
            },
            // {
            //     description:'GUERRA - (RENACER) 22 Ago 2022',
            //     source: Video1,
            //     poster: PosterVideo1,
            //     principal: false,
            //     link:'https://raulacostadeveloper.github.io/raulacostadeveloper/',

            // },
            // {
            //     description:'ELLA OLVIDÓ - (RENACER) 22 Ago 2022',
            //     source: Video1,
            //     poster: PosterVideo1,
            //     principal: false,
            //     link:'https://raulacostadeveloper.github.io/raulacostadeveloper/',

            // },
            // {
            //     description:'ROCKANROLERO - (RENACER) 22 Ago 2022',
            //     source: Video1,
            //     poster: PosterVideo1,
            //     principal: false,
            //     link:'https://raulacostadeveloper.github.io/raulacostadeveloper/',

            // },
            // {
            //     description:'RENACER - (RENACER) 22 Ago 2022',
            //     source: Video1,
            //     poster: PosterVideo1,
            //     principal: false,
            //     link:'https://raulacostadeveloper.github.io/raulacostadeveloper/',

            // },
        ])
    },[])
    return (
        <div className="Videos">
            {data.map((videoData)=>{
                return (
                    <Video 
                        key={videoData.description}
                        esPrincipal={videoData.principal}
                        source={videoData.source}
                        description={videoData.description}
                        poster={videoData.poster}
                        link={videoData.link}
                        />
                )
            })}
        </div>
    )
}
export default Videos;