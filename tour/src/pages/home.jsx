import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import Columns from "../api/JSON-categories/category-table-columns.json";
import Update from "../components/modals/categories/edit/edit";
import Add from "../components/modals/categories/add/add";
import See from "../components/modals/categories/see/see";
import Delete from "../components/modals/delete/delete";
import TablePage from "../components/table-page/page";

export default function Home() {

    const Buttons = [
        { title: "Abrir", style: { color: "#aede67", marginLeft: "0" }, icon: faEye, titleModal: "Información de la Categoría" },
        { title: "Modificar", style: { color: "#3b97b7" }, icon: faEdit, titleModal: "Modificar Información" },
        { title: "Eliminar", style: { color: "red", marginRight: "0" }, icon: faTrash, titleModal: "Confirmación" }
    ];
    
    return (
        <TablePage
            Columns={Columns}
            Collection={"categories"}
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
