import Columns from "../api/JSON-admins/admin-table-colums.json"
import TablePage from "../components/table-page/page";
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Add from "../components/modals/administrators/add/add";
import Update from "../components/modals/administrators/edit/edit";
import Delete from "../components/modals/delete/delete";

const Buttons = [ 
    {title:"Modificar", style:{ color: "#3b97b7"}, icon:faEdit, titleModal: "Modificar Información"},
    {title:"Eliminar", style:{ color: "red", marginRight: "0" }, icon:faTrash, titleModal: "Confirmación"}
]

export default function Admin() {
    return (
        <TablePage
            Columns={Columns}
            Collection={"administrators"}
            Title={"Administrador"}
            titleModal={"Información completa"}
            messageButton={"Ok"} 
            Buttons={Buttons}
            Add={Add}
            Update={Update}
            Delete={Delete}
        />
    );
}