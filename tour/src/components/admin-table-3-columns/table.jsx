import "./styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Table({ columns, rows }) {
    return (
        <div className="tableContainer">
            <table>
                <thead>
                    <tr>
                        {columns.data.map(element =>
                            <th key={element.title}>{element.title}</th>
                        )}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {rows.data.map(element =>
                        <tr key={element.column_1}>
                            <td>{element.column_1}</td>
                            <td>{element.column_2}</td>
                            <td>{element.column_3}</td>

                            <td>
                                <button title="Abrir" style={{color:"green", marginLeft: "0"}}><FontAwesomeIcon icon={faEye}/></button>
                                <button title="Editar" style={{color:"rgb(0, 136, 255)"}}><FontAwesomeIcon icon={faEdit}/></button>
                                <button title="Eliminar" style={{color:"red", marginRight: "0"}}><FontAwesomeIcon icon={faTrash}/></button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}