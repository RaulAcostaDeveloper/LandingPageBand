import '../Styles/SomosDeLirio/SomosDeLirio.css';
const SomosDeLirio = () => {
    return (
        <div className="SomosDeLirio">
            <div className='header'>
                Sobre nosotros
            </div>
            <div id='quienesSomos'>
                <h2>Quienes Somos</h2>
                <p>Banda de rock originaria del puerto de veracruz</p>
                <div className='integrantes'>
                    <div className='integrante'>
                        <a href='/integrantes/raul.jpg' target='_blank'>
                            <img src='/integrantes/raul.jpg'/>
                            <h3>Raúl Acosta</h3>
                        </a>
                    </div>
                    <div className='integrante'>
                        <a href='/integrantes/osmar.jpg' target='_blank'>
                            <img src='/integrantes/osmar.jpg'/>
                            <h3>Osmar Zaragosa</h3>
                        </a>
                    </div>
                    <div className='integrante'>
                        <a href='/integrantes/javi.jpg' target='_blank'>
                            <img src='/integrantes/javi.jpg'/>
                            <h3>Javi Cruz</h3>
                        </a>
                    </div>
                    <div className='integrante'>
                        <a href='/integrantes/pablo.jpg' target='_blank'>
                            <img src='/integrantes/pablo.jpg'/>
                            <h3>Pablo Michel</h3>
                        </a>
                    </div>
                </div>
            </div>
            <div id='nuestraHistoria'>
                <h2>Nuestra historia</h2>
                <p>Nos formamos en el año 2021</p>
            </div>
            <div className='logo'>
                <img src='/Logos/LOGO_DE_LIRIO_COLORES.png' alt='Logo De Lirio Colores'/>
            </div>
        </div>
    )
}
export default SomosDeLirio;