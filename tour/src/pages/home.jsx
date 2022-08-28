import Table from "../components/admin-table-3-columns/table";
import React, { useState } from "react";
import Columns from "../api/category-table-columns.json"
import Rows from "../api/categories.json"
import Form from "../components/search/form";
import Button from "../components/add-button/button";
import "../styles/home.css"

export default function Home() {
    const originalList = Rows.data
    const [list, setList] = useState(originalList);
    const [length, setLength] = useState(originalList.length)

    return (
        <>
            <h1>Categorías</h1>
            <div className="formContainer">
                <Button titulo={"Agregar Categoría"}/>
                <Form original={originalList} setList={setList} setLength={setLength} />
            </div>
            <Table columns={Columns} rows={list} length={length} />
            {/* aqui va la paginacion */}
        </>
    );
}