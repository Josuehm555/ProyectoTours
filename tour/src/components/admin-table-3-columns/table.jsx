import "./styles.css"
import NotFound from './not-found'
import Button from "./gestion-button";

export default function Table({ columns, rows, Buttons, See, Update, Delete }) {

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
                        {rows.map((element, index) =>
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{element.column_1}</td>
                                <td>{element.column_2}</td>
                                <td className="icons">
                                    {Buttons.map((button, key) =>
                                        <Button
                                            key={key}
                                            button={button}
                                            element={element}
                                            SeeModal={See}
                                            UpdateModal={Update}
                                            DeleteModal={Delete}
                                        />
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