import Table from "../components/admin-table-3-columns/table";
import Columns from "../api/category-table-columns.json"
import Rows from '../api/categories.json'

export default function Home() {
    return (
        <>
            {/* aqui va el buscador
            aqui va el boton de agregar */}
            <Table columns={Columns} rows={Rows}/>
            {/* aqui va la paginacion */}
        </>
    );
}