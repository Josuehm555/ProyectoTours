import "./styles.css"
import image from "../../../../assets/galery1.jpg"

export default function See({ element }) {

    return (
        <div className="seeContainer">
            <p>{element.column_3}<p>Categoría: {element.column_2}</p></p>
            <img src={ image } />
        </div>
    );
}