import React, { useState } from "react";
import Button from "../add-button/button";
import Form from "../search/form";
import Table from "../admin-table-3-columns/table";
import './styles.css'

export default function TablePage({ Columns, Rows, Title }) {
    const originalList = Rows.data
    const [list, setList] = useState(originalList);
    const [length, setLength] = useState(originalList.length)

    return (
        <>
            <h1>{Title}</h1>
            <div className="tableContainer">
                <div className="formContainer">
                    <Button titulo={Title}/>
                    <Form original={originalList} setList={setList} setLength={setLength} title={Title} />
                </div>
                <Table columns={Columns} rows={list} length={length} />
                {/* aqui va la paginacion */}
            </div>
        </>
    );
}