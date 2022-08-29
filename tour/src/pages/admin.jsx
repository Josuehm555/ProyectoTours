import Columns from "../api/JSON-admins/admin-table-colums.json"
import Rows from "../api/JSON-admins/admins.json"
import TablePage from "../components/table-page/page";

export default function Admin() {
    return (
         <TablePage Columns={Columns} Rows={Rows} Title={"Administrador"}/>
    );
}