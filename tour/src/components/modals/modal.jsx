import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


export default function Modal({ open, setOpen, Container, element, title, OnClick, Collection, setAlert, setError }) {

    return (
        <div className={(open) ? "modal" : "modal__alt"} >
            <div className="modal__container">
                <h1>{title}</h1>
                <button onClick={() => setOpen(!open)} title="Cerrar" className="modal__close__x">
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                <Container
                    element={element}
                    OnClick={OnClick}
                    setOpenModal={setOpen}
                    Collection={Collection}
                    setAlert={setAlert}
                    setError={setError}
                />
            </div>
        </div>
    )
}