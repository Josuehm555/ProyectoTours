import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import Modal from '../modals/modal'
import SeeModal from '../modals/categories/see/see'
import EditModal from '../modals/categories/edit/edit'
import DeleteModal from '../modals/categories/delete/delete';

export default function Button({ element, button }) {

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
                <Modal open={openModal} setOpen={setOpenModal} Container={SeeModal} element={element} title={button.titleModal}/>
            : openModal && bodyModal === "Edit" ?
                <Modal open={openModal} setOpen={setOpenModal} Container={EditModal} element={element} title={button.titleModal}/>
            : openModal && bodyModal === "Delete" ?
                <Modal open={openModal} setOpen={setOpenModal} Container={DeleteModal} element={element} title={button.titleModal}/>
            : null
            }
        </>
    );
}