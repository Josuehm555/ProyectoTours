import React, { useState } from "react";
import Button from "../button/button";
import Form from "../search/form";
import Table from "../admin-table-3-columns/table";
import PaginatedItems from "../pagination/pagination";
import './styles.css'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const icon = <FontAwesomeIcon icon={faPlus}/>

export default function TablePage({ Columns, Rows, Title, Buttons }) {
    const itemsPerTable = 3;
    const originalList = Rows.data;
    const [list, setList] = useState([...originalList].slice(0, itemsPerTable));

    return (
        <>
            <h1>{Title}</h1>
            <div className="tableContainer">
                <div className="formContainer">
                    <Button titulo={"Agregar "+Title} icon={icon} style={{backgroundColor: "#3b97b7"}} />
                    <Form original={originalList} setList={setList} title={Title} itemsPerTable={itemsPerTable} />
                </div>

                <Table columns={Columns} rows={list} Buttons={Buttons} />

                {list.length !== 0 ? (
                    <PaginatedItems itemsPerPage={itemsPerTable} items={originalList} setCurrentItems={setList}
                    />
                ) : null}
            </div>
        </>
    );
}