import Columns from "../api/category-table-columns.json"
import Rows from "../api/categories.json"
import TablePage from "../components/table-page/page";

export default function Home() {
    return (
        <TablePage Columns={Columns} Rows={Rows} Title={"Categorías"}/>
    );
}