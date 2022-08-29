import Columns from "../api/JSON-categories/category-table-columns.json"
import Rows from "../api/JSON-categories/categories.json"
import TablePage from "../components/table-page/page";

export default function Home() {
    return (
        <TablePage Columns={Columns} Rows={Rows} Title={"Categorías"}/>
    );
}