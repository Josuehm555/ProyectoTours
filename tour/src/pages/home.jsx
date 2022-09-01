import Columns from "../api/JSON-categories/category-table-columns.json"
import TablePage from "../components/table-page/page";
import { readData } from "../services/read";
import { useEffect, useState } from "react";

export default function Home() {
    const [categories, setCategories] = useState({"data":[]});

    useEffect(() => {
        let data = readData("categories");
        data.then(function(result) {
            setCategories(result);
        });
    }, [])

    return (
        <TablePage Columns={Columns} Rows={categories} Title={"Categorías"}/>
    );
}