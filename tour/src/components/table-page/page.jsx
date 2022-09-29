import { collection, onSnapshot, query } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import PaginatedItems from "../pagination/pagination";
import { db } from "../../services/firebase-config";
import React, { useEffect, useState } from "react";
import Table from "../admin-table-3-columns/table";
import Spinner from "../../assets/spinner.gif";
import { readData } from '../../services/read';
import Button from "../button/button";
import Modal from "../modals/modal";
import Alert from "../alert/alert";
import Form from "../search/form";
import './styles.css'

const icon = <FontAwesomeIcon icon={faPlus} />

export default function TablePage({ Columns, Title, Buttons, Add, See, Update, Delete, Collection }) {
    const [openModal, setOpenModal] = useState(false);
    const [List, setList] = useState([])
    const [Original, setOriginal] = useState();
    const itemsPerTable = 6;
    const [Deleted, setDeleted] = useState(false);
    const [Added, setAdded] = useState(false);
    const [Updated, setUpdated] = useState(false);
    const [ErrorMessage, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [updatePagination, setUpdatePagination] = useState(false);

    useEffect(() => {
        update();
    }, [])

    const update = async () => {
        const snap = query(collection(db, Collection));
        onSnapshot(snap, () => {
            let data = readData(Collection, setLoading, setUpdatePagination);
            data.then(function (result) {
                if (result === null) {
                    setOriginal(null)
                }
                else if (data !== null) {
                    setOriginal(result);
                    setList([...result].slice(0, itemsPerTable))
                }
            });
        });
    }

    return (
        <>
            <div className="Alerts">
                {Deleted ?
                    <Alert text="Se eliminó correctamente" setOpen={setDeleted} style={{ backgroundColor: "rgb(255, 81, 81)" }} />
                    : null
                }
                {Added ?
                    <Alert text="Se agregó correctamente" setOpen={setAdded} style={{ backgroundColor: "#3b97b7" }} />
                    : null
                }
                {Updated ?
                    <Alert text="Se modificó correctamente" setOpen={setUpdated} style={{ backgroundColor: "#3b97b7" }} />
                    : null
                }
                {ErrorMessage ?
                    <Alert text="No se completó la operación correctamente" setOpen={setError} style={{ backgroundColor: "rgb(255, 81, 81)" }} />
                    : null
                }
            </div>

            <h1 className="title">{Title}</h1>

            <div className="tableContainer">
                <div className="formContainer">
                    <Button OnClick={() => setOpenModal(!openModal)} titulo={"Agregar " + Title} icon={icon} style={{ backgroundColor: "#3b97b7" }} />
                    <Form original={Original} setList={setList} title={Title} itemsPerTable={itemsPerTable} />
                </div>

                {loading ?
                    <div className='tableSpinner'><img src={Spinner} /></div>
                    : null
                }

                {Original != null ?
                    <>
                        <Table columns={Columns} rows={List} Buttons={Buttons} See={See} Update={Update} Delete={Delete} Collection={Collection} setDeleted={setDeleted} setUpdated={setUpdated} setError={setError} />
                        {Original.length !== 0 && !updatePagination?
                            <PaginatedItems itemsPerPage={itemsPerTable} items={Original} setCurrentItems={setList} />
                            : null}
                    </>
                    :
                        Original == null && loading ? null
                    :
                        <div className='emptyCollection'><h1>No hay elementos</h1></div>
                }

                {openModal ?
                    <Modal open={openModal} setOpen={setOpenModal} Container={Add} element={"element"} title={"Añadir " + Title} setAlert={setAdded} Collection={Collection} />
                    : null}
            </div>
        </>
    );
}