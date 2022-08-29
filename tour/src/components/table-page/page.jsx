import React, { useState } from "react";
import Button from "../add-button/button";
import Form from "../search/form";
import Table from "../admin-table-3-columns/table";
import PaginatedItems from "../pagination/pagination";
import './styles.css'

export default function TablePage({ Columns, Rows, Title }) {
    const itemsPerTable = 2;
    const originalList = Rows.data;
    const [list, setList] = useState([...originalList].slice(0, itemsPerTable));
    const [length, setLength] = useState(originalList.length)

    return (
        <>
            <h1>{Title}</h1>
            <div className="tableContainer">
                <div className="formContainer">
                    <Button titulo={Title} />
                    <Form original={originalList} setList={setList} setLength={setLength} title={Title} itemsPerTable={itemsPerTable} />
                </div>
                <Table columns={Columns} rows={list} length={length} />
                <PaginatedItems itemsPerPage={itemsPerTable} items={originalList} setCurrentItems={setList} />
            </div>
        </>
    );
}