import Input from '../../../input/input'
import { useForm } from '../../../../hooks/useForm';
import Button from '../../../button/button';

export default function Add({ setOpenModal }) {

    const { onInputChange, nombre, apellido, correo } = useForm( 
        { nombre: '', apellido: '', correo: '' }
    )

    return (
        <>
            <Input onInputChange={onInputChange} disabled={false} defaultValue={nombre} id="nombre" label={"Nombre"} />
            <Input onInputChange={onInputChange} disabled={false} defaultValue={apellido} id="apellido" label={"Apellido"} />
            <Input onInputChange={onInputChange} disabled={false} defaultValue={correo} id="correo" label={"Correo"} />
            <Button titulo={"Cancelar"} icon={""} style={{ backgroundColor: "red", marginRight: "20px" }} OnClick={() => setOpenModal(false)} />
            <Button titulo={"Añadir"} icon={""} style={{ backgroundColor: "#aede67", color: "black" }} />
        </>
    );
}