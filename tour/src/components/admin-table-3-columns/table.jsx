import "./styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

export default function Table({ columns, rows, length }) {
    return (
        <div>
            {length != 0 ? (
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
                    {rows.map(element =>
                        <tr key={element.column_1}>
                            <td>{element.column_1}</td>
                            <td>{element.column_2}</td>
                            <td>{element.column_3}</td>

                            <td>
                                <Link className="iconsLink" to={element.urlSee} title="Abrir" style={{color:"green", marginLeft: "0"}}><FontAwesomeIcon icon={faEye}/></Link>
                                <Link className="iconsLink" to={element.urlUpdate} title="Editar" style={{color:"rgb(0, 136, 255)"}}><FontAwesomeIcon icon={faEdit}/></Link>
                                <Link className="iconsLink" to={element.urlDelete} title="Eliminar" style={{color:"red", marginRight: "0"}}><FontAwesomeIcon icon={faTrash}/></Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            ) : (
                <table>
                <h2>No hay resultados</h2>
                </table>
            )}
        </div>
    );
}