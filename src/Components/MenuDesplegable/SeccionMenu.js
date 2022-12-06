import { useState, useEffect } from "react";
import '../Styles/MenuDesplegable/SeccionMenu.css';
const SeccionMenu = ({nombre, children})=> {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = ()=>{
        setIsOpen(!isOpen)
    }
    return (
        <div className="SeccionMenu" >
            <div className="header" onClick={()=>handleOpen()}>
                <div className="nombre">
                    {nombre}
                </div>
                <div className="iconoApertura">
                    {isOpen?
                    <img src="./down-arrow.png" alt="down arrow"/>
                    :
                    <img src="./right-arrow.png" alt="right arrow"/>
                }
                </div>
            </div>
            {isOpen&&
                <div className="interior" id={`${nombre}SubSeccionMenu`}>
                    {children}
                </div>
            }
        </div>
    )
}
export default SeccionMenu;