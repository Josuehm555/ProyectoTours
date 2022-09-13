import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../../services/firebase-config";
import { createData } from '../../../../services/create';
import { readData } from '../../../../services/read';
import { useForm } from '../../../../hooks/useForm';
import Cancel from '../../../cancel-button/button';
import Alert from "../../../alert/alertModal";
import { useEffect, useState } from 'react';
import Button from '../../../button/button';
import Input from '../../../input/input';
import './styles.css';

export default function Add({ setOpenModal, setAlert, Collection }) {

    const [Categories, setCategories] = useState([]);
    const [Category, setCategory] = useState();
    const [ErrorMessage, setError] = useState(false);

    const { onInputChange, name, description } = useForm(
        { name: '', description: '' }
    )

    useEffect(() => {
        update();
    }, [])

    const update = async () => {
        const snap = query(collection(db, 'categories'));
        onSnapshot(snap, () => {
            let data = readData('categories', setError);
            data.then(function (result) {
                if (data != null) {
                    setCategories(result);
                    setCategory(result[0].column_1)
                }
            });
        });
    }

    const save = () => {
        if (name === "" || description === "") {
            setError(true)
        }
        else {
            const data = { 'name': name, 'description': description, 'category': Category };
            createData(Collection, data);
            setOpenModal(false)
            setAlert(true)
        }
    }

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <>
            <form className='form_category'>
                <label>Categoría: </label>
                <select className="drop_down" onChange={handleChange}>
                    {Categories.map((category, key) =>
                        <option key={key} value={category.column_1}>{category.column_1}</option>
                    )}
                </select>
            </form>
            <Input onInputChange={onInputChange} disabled={false} defaultValue={name} id="name" label={"Nombre"} />
            <Input onInputChange={onInputChange} disabled={false} defaultValue={description} id="description" label={"Descripción"} />
            <Cancel titulo={"Cancelar"} icon={""} OnClick={() => setOpenModal(false)} />
            <Button titulo={"Guardar"} icon={""} style={{ backgroundColor: "#3b97b7" }} OnClick={save} />
            <div className="AlertsModal">
                {ErrorMessage ?
                    <Alert text="Campos Vacíos" setOpen={setError} style={{ backgroundColor: "rgb(255, 81, 81)" }} />
                    : null
                }
            </div>
        </>
    );
}