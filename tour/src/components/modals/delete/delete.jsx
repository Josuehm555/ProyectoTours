import { deleteData } from '../../../services/delete';
import Cancel from '../../cancel-button/button';
import Button from '../../button/button';
import './styles.css'

export default function Delete({ element, setOpenModal, Collection, setAlert, setError }) {

    const Delete = () => {
        deleteData(Collection, element.id, setAlert, setError)
        setOpenModal(false)
        setAlert(true)
    }

    return (
        <>
            <div className='bodyModal'>
                <p>¿Seguro que desea eliminar a {element.column_1}?</p>
            </div>
            <Cancel titulo={"Cancelar"} icon={""} OnClick={() => setOpenModal(false)} />
            <Button titulo={"Sí, Eliminar"} icon={""} style={{ backgroundColor: "#3b97b7"}} OnClick={Delete}/>
        </>
    );
}