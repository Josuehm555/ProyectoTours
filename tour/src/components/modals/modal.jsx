import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


export default function Modal({ open, setOpen, Container, element, title, OnClick}) {

    return (
        <div className={(open) ? "modal" : "modal__alt"} >
            <div className="modal__container">
                <h1>{title}</h1>
                <button onClick={() => setOpen(!open)} title="Cerrar" className="modal__close__x">
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                <Container element={element} setOpenModal={setOpen} OnClick={OnClick}/>
            </div>
        </div>
    )
}