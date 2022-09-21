import AddImages from '../../../upload-image-button/button';
import { UploadImages } from '../../../../services/create';
import Spinner from '../../../../assets/spinner.gif';
import { useForm } from '../../../../hooks/useForm';
import Cancel from '../../../cancel-button/button';
import Alert from '../../../alert/alertModal';
import Button from '../../../button/button';
import Input from '../../../input/input';
import { useState } from 'react';
import '../styles.css'
export default function Add({ setOpenModal, setAlert, Collection }) {

    const [images, setImages] = useState([]);
    const [ErrorMessage, setError] = useState(false);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const { onInputChange, name, description } = useForm(
        { name: '', description: '' }
    )

    const save = async () => {
        if (name === "" || description === "") {
            setMessage("Campos vacíos");
            setError(true)
        }
        else if (images.length === 0) {
            setMessage("Seleccione al menos una imagen");
            setError(true)
        }
        else {
            setLoading(true)
            await UploadImages(Collection, name, description, images, setLoading)
            setOpenModal(false);
            setAlert(true);
        }
    }

    return (
        <>
            <Input onInputChange={onInputChange} defaultValue={name} id="name" label={"Nombre"} />
            <Input onInputChange={onInputChange} defaultValue={description} id="description" label={"Descripción"} />
            <AddImages images={images} setImages={setImages} />
            <div className="AlertsModal">
                {ErrorMessage ?
                    <Alert text={message} setOpen={setError} style={{ backgroundColor: "rgb(255, 81, 81)" }} />
                    : null
                }
            </div>
            {loading ?
                <div className='modalSpinner'><img src={Spinner} /></div>
                : null
            }
            <Cancel titulo={"Cancelar"} icon={""} OnClick={() => setOpenModal(false)} />
            <Button titulo={"Guardar"} icon={""} style={{ backgroundColor: "#3b97b7" }} OnClick={save} />
        </>
    );
}