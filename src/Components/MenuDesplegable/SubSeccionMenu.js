import '../Styles/MenuDesplegable/SubSeccionMenu.css';
const SubSeccionMenu = ({ titulo, liga, handleOpen, target })=>{
    return (
        <div className="subSeccionMenu">
            <a href={ liga } onClick={ () => handleOpen() } target= { target }>
                { titulo }
            </a>
        </div>
    )
}
export default SubSeccionMenu;