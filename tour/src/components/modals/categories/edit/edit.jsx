import "./styles.css"

export default function Edit({ element, setOpenModal}) {

    return (
        <>
            <div className="input-group">
                <input required id="nombre" type="text" className="inputSee" value={"Brian"} />
                <label for="nombre" className="input-label">Nombre</label>
            </div>
            <div className="input-group">
                <input required id="name" type="text" className="inputSee" value={"Perez Avila"} />
                <label for="name" className="input-label">Apellidos</label>
            </div>
            <div className="input-group">
                <input required id="name" type="text" className="inputSee" value={"Brian@gmail.com"} />
                <label for="name" className="input-label">Correo</label>
            </div>
            <div className="input-group">
                <input required id="name" type="text" className="inputSee" value={"Administrador"} />
                <label for="name" className="input-label">Puesto</label>
            </div>
        </>
    );
}