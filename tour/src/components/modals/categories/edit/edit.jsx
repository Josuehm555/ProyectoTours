import { updateDataCategorie } from "../../../../services/update";
import AddImages from '../../../upload-image-button/button';
import Spinner from '../../../../assets/spinner.gif';
import { useForm } from "../../../../hooks/useForm";
import Cancel from "../../../cancel-button/button";
import Alert from "../../../alert/alertModal";
import Button from "../../../button/button";
import { useEffect, useState } from 'react';
import Input from '../../../input/input';
import '../styles.css'
export default function Edit({ element, setOpenModal, setAlert, Collection }) {

    const [images, setImages] = useState([]);
    const [ErrorMessage, setError] = useState(false);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const { onInputChange, name, description } = useForm(
        {
            name: element.column_1,
            description: element.column_2,
        }
    )

    useEffect(() => {
        uploadOldImages();
    }, [])

    const uploadOldImages = () => {
        let newImages = [];
        element.images.map((url) => {
            newImages.push({"url": url});
        })
        setImages(newImages);
    }

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
            await updateDataCategorie(Collection, element.id, name, description, images, setLoading)
            setOpenModal(false)
            setAlert(true)
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