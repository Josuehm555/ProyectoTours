import "./styles.css"
import { useState } from 'react';
import Input from '../../../input/input'
import Button from "../../../button/button";
import { useForm } from "../../../../hooks/useForm";
import AddImages from '../../../upload-image-button/button';

export default function Edit({ element, setOpenModal }) {

    const [images, setImages] = useState([])
    const categories = ["Diagnóstico", "Mejoramiento continuo", "Patrimonio turístico", "Diseño", "Gestión en sostenibilidad Turística", "Marketing", "Capacitación"]

    const { onInputChange, name, description } = useForm(
        {
            name: element.column_1,
            description: element.column_3,
        }
    )

    return (
        <>
            <form className='form_category'>
                <label>Categoría:</label>
                <select className="drop_down">
                    {categories.map((category, key) =>
                        <option key={key} value={category}>{category}</option>
                    )}
                </select>
            </form>
            <Input onInputChange={onInputChange} disabled={false} defaultValue={name} id="name" label={"Nombre"} />
            <Input onInputChange={onInputChange} disabled={false} defaultValue={description} id="description" label={"Descripción"} />
            <AddImages images={images} setImages={setImages} />
            <Button titulo={"Cancelar"} icon={""} style={{ backgroundColor: "red", marginRight: "20px" }} OnClick={() => setOpenModal(false)} />
            <Button titulo={"Modificar y Guardar"} icon={""} style={{ backgroundColor: "#aede67", color: "black" }} />
        </>
    );
}