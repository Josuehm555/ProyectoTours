import Button from '../../../button/button';
import './styles.css'

export default function Delete({ element, setOpenModal }) {

    return (
        <>
            <div className='bodyModal'>
                <p>¿Seguro que desea eliminar a {element.column_2}?</p>
            </div>
            <Button titulo={"Cancelar"} icon={""} style={{ backgroundColor: "red", marginRight: "20px" }} OnClick={()=> setOpenModal(false)}/>
            <Button titulo={"Sí, Eliminar"} icon={""} style={{ backgroundColor: "#aede67" , color:"black" }} />
        </>
    );
}