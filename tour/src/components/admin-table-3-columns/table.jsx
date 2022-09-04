import "./styles.css"
import NotFound from './not-found'
import Button from "./gestion-button";

export default function Table({ columns, rows, Buttons }) {

    return (
        <div>
            {rows.length !== 0 ? (
                <table>
                    <thead>
                        <tr>
                            {columns.data.map((element, key) =>
                                <th key={key}>{element.title}</th>
                            )}
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((element, key) =>
                            <tr key={key}>
                                <td>{element.column_1}</td>
                                <td>{element.column_2}</td>
                                <td>{element.column_3}</td>
                                <td>
                                    {Buttons.map((button, key) =>
                                        <Button key={key} button={button} element={element} />
                                    )}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            ) : (
                <NotFound> </NotFound>
            )}
        </div>
    );
}