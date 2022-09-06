import Columns from "../api/JSON-subcategories/subcategory-table-columns.json"
import Rows from "../api/JSON-subcategories/subcategories.json"
import TablePage from "../components/table-page/page";
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Add from "../components/modals/subcategories/add/add";
import See from "../components/modals/subcategories/see/see";
import Update from "../components/modals/subcategories/edit/edit";
import Delete from "../components/modals/delete/delete";

export default function Sugcategory() {

    const Buttons = [ 
        {title:"Abrir", style:{ color: "#aede67", marginLeft: "0" }, icon:faEye, titleModal: "Información de la subcategoría"},
        {title:"Modificar", style:{ color: "#3b97b7"}, icon:faEdit, titleModal: "Modificar Información"},
        {title:"Eliminar", style:{ color: "red", marginRight: "0" }, icon:faTrash, titleModal: "Confirmación"}
    ]

    return (
        <TablePage
            Columns={Columns}
            Rows={Rows}
            Title={"Subcategorías"}
            titleModal={"Información completa"}
            messageButton={"Ok"} 
            Buttons={Buttons}
            Add={Add}
            See={See}
            Update={Update}
            Delete={Delete}
        />
    );
}