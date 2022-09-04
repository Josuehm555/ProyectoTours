import Columns from "../api/JSON-admins/admin-table-colums.json"
import Rows from "../api/JSON-admins/admins.json"
import TablePage from "../components/table-page/page";
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const Buttons = [ 
    {title:"Abrir", style:{ color: "#aede67", marginLeft: "0" }, icon:faEye, titleModal: "Información Completa"},
    {title:"Modificar", style:{ color: "#3b97b7"}, icon:faEdit, titleModal: "Modificar Información"},
    {title:"Eliminar", style:{ color: "red", marginRight: "0" }, icon:faTrash, titleModal: "Confirmación"}
]

export default function Admin() {
    return (
        <TablePage
            Columns={Columns}
            Rows={Rows}
            Title={"Administrador"}
            titleModal={"Información completa"}
            messageButton={"Ok"} 
            Buttons={Buttons}
        />
    );
}