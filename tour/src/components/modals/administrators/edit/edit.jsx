import "./styles.css"
import Input from '../../../input/input'
import Button from "../../../button/button";
import { useForm } from "../../../../hooks/useForm";

export default function Edit({ element, setOpenModal }) {

    const { onInputChange, nombre, correo } = useForm(
        {
            nombre: element.column_1,
            correo: element.column_2
        }
    )

    return (
        <>
            <Input onInputChange={onInputChange} disabled={false} defaultValue={nombre} id="nombre" label={"Nombre"} />
            <Input onInputChange={onInputChange} disabled={true} defaultValue={correo} id="correo" label={"Correo"} />
            <Button titulo={"Cancelar"} icon={""} style={{ backgroundColor: "red", marginRight: "20px" }} OnClick={() => setOpenModal(false)} />
            <Button titulo={"Guardar"} icon={""} style={{ backgroundColor: "#aede67", color: "black" }} />
        </>
    );
}