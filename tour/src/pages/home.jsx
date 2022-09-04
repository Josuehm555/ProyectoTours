import Columns from "../api/JSON-categories/category-table-columns.json"
import Rows from "../api/JSON-categories/categories.json"
import TablePage from "../components/table-page/page";
import See from '../components/modals/categories/see/see'
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Home() {

    const Buttons = [ 
        {title:"Abrir", style:{ color: "#aede67", marginLeft: "0" }, icon:faEye, titleModal: "Información Completa"},
        {title:"Modificar", style:{ color: "#3b97b7"}, icon:faEdit, titleModal: "Modificar Inforación"},
        {title:"Eliminar", style:{ color: "red", marginRight: "0" }, icon:faTrash, titleModal: "Confirmación"}
    ]

    return (
        <TablePage
            Columns={Columns}
            Rows={Rows}
            Title={"Categorías"}
            titleModal={"Información completa"}
            messageButton={"Ok"} 
            SeeModal={See}
            Buttons={Buttons}
        />
    );
}