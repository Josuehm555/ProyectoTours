import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import Modal from '../modals/modal'

export default function Button({ element, button, SeeModal, UpdateModal, DeleteModal, Collection, setDeleted, setUpdated, setError }) {

    const [openModal, setOpenModal] = useState(false);
    const [bodyModal, setBodyModal] = useState()

    function OnClick() {
        if (button.title === "Abrir") {
            setBodyModal("See")
        }
        if (button.title === "Modificar") {
            setBodyModal("Edit")
        }
        if (button.title === "Eliminar") {
            setBodyModal("Delete")
        }
        setOpenModal(!openModal);
    }

    return (
        <>
            <button className="iconsLink" onClick={OnClick} title={button.title} style={button.style} >
                <FontAwesomeIcon icon={button.icon} />
            </button>

            {openModal && bodyModal === "See" ?
                <Modal open={openModal} setOpen={setOpenModal} Container={SeeModal} element={element} title={element.column_1}/>
            : openModal && bodyModal === "Edit" ?
                <Modal open={openModal} setOpen={setOpenModal} Container={UpdateModal} element={element} title={button.titleModal} Collection={Collection} setAlert={setUpdated} />
            : openModal && bodyModal === "Delete" ?
                <Modal open={openModal} setOpen={setOpenModal} Container={DeleteModal} element={element} title={button.titleModal} Collection={Collection} setAlert={setDeleted} setError={setError}/>
            : null
            }
        </>
    );
}