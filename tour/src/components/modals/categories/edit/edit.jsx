import "./styles.css"
import Input from '../../../input/input'
import Button from "../../../button/button";
import { useForm } from "../../../../hooks/useForm";

export default function Edit({ element, setOpenModal}) {

    const {onInputChange, nombre, apellido, correo} = useForm(
        {nombre: 'brian',
         apellido: 'perez',
         correo: 'avila@gmail.com'
        }
      )

    return (
        <>
            <Input onInputChange={onInputChange} disabled={false} defaultValue={nombre} id="nombre" label={"Nombre"}/>
            <Input onInputChange={onInputChange} disabled={false} defaultValue={apellido} id="apellido" label={"Apellido"}/>
            <Input onInputChange={onInputChange} disabled ={true} defaultValue={correo} id="correo" label={"Correo"}/> 
            <Button titulo={"Cancelar"} icon={""} style={{ backgroundColor: "red", marginRight: "20px" }} OnClick={()=> setOpenModal(false) }/>
            <Button titulo={"Guardar"} icon={""} style={{ backgroundColor: "#aede67" , color:"black" }} />
        </>
    ); 
}