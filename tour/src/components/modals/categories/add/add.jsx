import { useState } from 'react';
import Input from '../../../input/input';
import Button from '../../../button/button';
import { useForm } from '../../../../hooks/useForm';
import AddImages from '../../../upload-image-button/button';

export default function Add({ setOpenModal }) {

    const [images, setImages] = useState([])

    const { onInputChange, nombre, description } = useForm( 
        { nombre: '', description: '' }
    )

    return (
        <>
            <Input onInputChange={onInputChange} disabled={false} defaultValue={nombre} id="nombre" label={"Nombre"} />
            <Input onInputChange={onInputChange} disabled={false} defaultValue={description} id="description" label={"Descripción"} />
            <AddImages images={images} setImages={setImages} />
            <Button titulo={"Cancelar"} icon={""} style={{ backgroundColor: "red", marginRight: "20px" }} OnClick={() => setOpenModal(false)} />
            <Button titulo={"Añadir y Guardar"} icon={""} style={{ backgroundColor: "#aede67", color: "black" }} />
        </>
    );
}