import { updateDataInformation } from "../../services/update";
import { useForm } from "../../hooks/useForm";
import Spinner from "../../assets/spinner.gif"
import Alert from "../alert/alert";
import Button from "../button/button";
import Input from '../input/input';
import { useState } from "react";
import './style.css'

export default function Information({ information }) {

    const [errorMessage, setError] = useState(false);
    const [emptyFields, setEmptyFields] = useState(false);
    const [update, setUpdate] = useState(false);
    const [loading, setLoading] = useState(false);

    const { onInputChange, aboutus, email, facebook, instagram, phone } = useForm(
        {
            aboutus: information.aboutus,
            email: information.email,
            facebook: information.facebook,
            instagram: information.instagram,
            phone: information.phone
        }
    )

    const save = () => {
        if (email !== "" && facebook !== "" && instagram !== "" && phone !== "" && aboutus !== "") {
            setLoading(true);
            updateDataInformation(information.id, aboutus, email, facebook, instagram, phone, setError, setLoading, setUpdate);
        }
        else {
            setEmptyFields(true);
        }
    }

    return (
        <div className="dataContainer">

            <div className="AlertsInformation">
                {errorMessage ?
                    <Alert text="Error de conexión" setOpen={setError} style={{ backgroundColor: "rgb(255, 81, 81)" }} />
                    : null
                }
                {emptyFields ?
                    <Alert text="Algunos campos están vacíos" setOpen={setEmptyFields} style={{ backgroundColor: "rgb(255, 81, 81)" }} />
                    : null
                }
                {update ?
                    <Alert text="La información se actualizó correctamente" setOpen={setUpdate} style={{ backgroundColor: "#3b97b7" }} />
                    : null
                }
            </div>

            <div className="informationInputs">
                <Input onInputChange={onInputChange} defaultValue={email} id="email" label={"Email"} />
                <Input onInputChange={onInputChange} defaultValue={phone} id="phone" label={"Teléfono"} />
            </div>
            <div className="informationInputs">
                <Input onInputChange={onInputChange} defaultValue={facebook} id="facebook" label={"Facebook"} />
                <Input onInputChange={onInputChange} defaultValue={instagram} id="instagram" label={"Instagram"} />
            </div>
            <div className="input-group">
                <textarea rows="5" onChange={onInputChange} className="textArea" type="text" defaultValue={aboutus} name="aboutus" id="aboutus" label={"Sobre Nosotros"} required />
                <label htmlFor="aboutus" className="input-label">Sobre Nosotros</label>
            </div>

            <Button titulo={"Guardar"} icon={""} style={{ backgroundColor: "#3b97b7", width: "100%" }} OnClick={save}></Button>

            {loading ?
                <div className='informationSpinner2'><img src={Spinner} /></div>
                :
                null
            }
        </div>
    );
}