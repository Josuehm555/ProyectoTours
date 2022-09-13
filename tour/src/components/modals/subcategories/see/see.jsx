import './styles.css'

export default function See({ element }) {
    return (
        <div className="seeContainer">
            <p>Descripción: {element.column_3}</p>
            <p>Categoría: {element.column_2}</p>
        </div>
    );
}