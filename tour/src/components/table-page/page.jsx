import React, { useState } from "react";
import Button from "../button/button";
import Form from "../search/form";
import Table from "../admin-table-3-columns/table";
import PaginatedItems from "../pagination/pagination";
import './styles.css'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../modals/modal";

const icon = <FontAwesomeIcon icon={faPlus} />

export default function TablePage({ Columns, Rows, Title, Buttons, Add, See, Update, Delete }) {
    const itemsPerTable = 5;
    const originalList = Rows.data;
    const [list, setList] = useState([...originalList].slice(0, itemsPerTable));
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <h1>{Title}</h1>
            <div className="tableContainer">
                <div className="formContainer">
                    <Button OnClick={() => setOpenModal(!openModal)} titulo={"Agregar " + Title} icon={icon} style={{ backgroundColor: "#3b97b7" }} />
                    <Form original={originalList} setList={setList} title={Title} itemsPerTable={itemsPerTable} />
                </div>

                <Table columns={Columns} rows={list} Buttons={Buttons} See={See} Update={Update} Delete={Delete} />

                {list.length !== 0 ? (
                    <PaginatedItems itemsPerPage={itemsPerTable} items={originalList} setCurrentItems={setList}
                    />
                ) : null}

                {openModal ?
                    <Modal open={openModal} setOpen={setOpenModal} Container={Add} element={"element"} title={"Añadir "+Title} />
                    : null}

            </div>
        </>
    );
}