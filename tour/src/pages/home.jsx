import Table from "../components/admin-table-3-columns/table";
import Columns from "../api/category-table-columns.json"
import Rows from '../api/categories.json'
import Form from "../components/search/form";
import React, { useState } from "react";

export default function Home() {
    const originalList = Rows.data
    const [list, setList] = useState(originalList);
    const [length, setLength] = useState(originalList.length)

    return (
        <>
            <h1>Categorías</h1>
            <Form original={originalList} setList={setList} setLength={setLength}/>
            {/* aqui va el boton de agregar */}
            <Table columns={Columns} rows={list} length={length}/>
            {/* aqui va la paginacion */}
        </>
    );
}