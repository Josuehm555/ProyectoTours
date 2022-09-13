import Cancel from '../../cancel-button/button';
import Button from '../../button/button';
import './styles.css'

export default function Delete({ element, setOpenModal, OnClick }) {

    return (
        <>
            <div className='bodyModal'>
                <p>¿Seguro que desea eliminar esta imagen?</p>
                <img src={element} />
            </div>
            <Cancel titulo={"Cancelar"} icon={""} OnClick={() => setOpenModal(false)} />
            <Button titulo={"Sí, Eliminar"} icon={""} style={{ backgroundColor: "#3b97b7"}} OnClick={OnClick}/>
        </>
    );
}