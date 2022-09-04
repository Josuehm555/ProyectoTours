import Button from '../../../button/button';
import './styles.css'

export default function Delete({ element, setOpenModal, OnClick }) {

    return (
        <>
            <div className='bodyModal'>
                <p>¿Seguro que desea eliminar esta imagen?</p>
                <img src={element} />
            </div>
            <Button titulo={"Cancelar"} icon={""} style={{ backgroundColor: "red", marginRight: "20px" }} OnClick={()=> setOpenModal(false)}/>
            <Button titulo={"Sí, Eliminar"} icon={""} style={{ backgroundColor: "#aede67" , color:"black" }} OnClick={OnClick}/>
        </>
    );
}