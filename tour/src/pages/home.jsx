import Columns from "../api/JSON-categories/category-table-columns.json"
import Rows from "../api/JSON-categories/categories.json"
import TablePage from "../components/table-page/page";
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Add from "../components/modals/categories/add/add";
import See from "../components/modals/categories/see/see";
import Update from "../components/modals/categories/edit/edit";
import Delete from "../components/modals/delete/delete";

export default function Home() {

    const Buttons = [ 
        {title:"Abrir", style:{ color: "#aede67", marginLeft: "0" }, icon:faEye, titleModal: "Información de la Categoría"},
        {title:"Modificar", style:{ color: "#3b97b7"}, icon:faEdit, titleModal: "Modificar Información"},
        {title:"Eliminar", style:{ color: "red", marginRight: "0" }, icon:faTrash, titleModal: "Confirmación"}
    ]

    return (
        <TablePage
            Columns={Columns}
            Rows={Rows}
            Title={"Categorías"}
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