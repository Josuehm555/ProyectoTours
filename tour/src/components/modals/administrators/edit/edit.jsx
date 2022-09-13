import { updateDataAdmins } from "../../../../services/update";
import { useForm } from "../../../../hooks/useForm";
import Cancel from "../../../cancel-button/button";
import Alert from "../../../alert/alertModal";
import Button from "../../../button/button";
import Input from '../../../input/input';
import { useState } from "react";

export default function Edit({ element, setOpenModal, Collection, setAlert }) {

    const [ErrorMessage, setError] = useState(false);

    const { onInputChange, name, mail } = useForm(
        {
            name: element.column_1,
            mail: element.column_2
        }
    )

    const save = () => {
        if (name === "" || mail === "") {
            setError(true)
        }
        else{
            updateDataAdmins(Collection, element.id, name, mail)
            setOpenModal(false)
            setAlert(true)
        }
    }

    return (
        <>
            <Input onInputChange={onInputChange} disabled={false} defaultValue={name} id="name" label={"Nombre"} />
            <Input onInputChange={onInputChange} disabled={false} defaultValue={mail} id="mail" label={"Correo"} />
            <Cancel titulo={"Cancelar"} icon={""} OnClick={() => setOpenModal(false)} />
            <Button titulo={"Guardar"} icon={""} style={{ backgroundColor: "#3b97b7"}} OnClick={save}/>
            <div className="AlertsModal">
                {ErrorMessage ?
                    <Alert text="Campos Vacíos" setOpen={setError} style={{ backgroundColor: "rgb(255, 81, 81)" }} />
                    : null
                }
            </div>
        </>
    );
}