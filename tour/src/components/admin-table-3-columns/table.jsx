import Button from "./gestion-button";
import NotFound from './not-found'
import "./styles.css"

export default function Table({ columns, rows, Buttons, See, Update, Delete, Collection, setDeleted, setUpdated, setError}) {

    return (
        <div className="table">
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
                        {rows.map((element, key) => {
                            return (
                                <tr key={key}>
                                    <td>{element.number}</td>
                                    <td className="colunm1">{element.column_1}</td>
                                    <td className="colunm2">{element.column_2}</td>
                                    <td className="icons">
                                        {Buttons.map((button, key) =>
                                            <Button
                                                key={key}
                                                button={button}
                                                element={element}
                                                SeeModal={See}
                                                UpdateModal={Update}
                                                DeleteModal={Delete}
                                                Collection={Collection}
                                                setDeleted={setDeleted}
                                                setUpdated={setUpdated}
                                                setError={setError}
                                            />
                                        )}
                                    </td>
                                </tr>
                            )
                        }
                        )}
                    </tbody>
                </table>
            ) : (
                <NotFound> </NotFound>
            )}
        </div>
    );
}