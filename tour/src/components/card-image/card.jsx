import './styles.css';
import { useState } from 'react';
import Modal from '../modals/modal';
import Delete from '../modals/galery/delete';
import { addImage } from '../../hooks/addImages';
import { deleteImage } from '../../hooks/deleteImage';
import iconAddGalery from '../../assets/addGalery.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEye } from '@fortawesome/free-solid-svg-icons';

export default function Card({ images, setImages }) {
    const [openModal, setOpenModal] = useState(false);
    const [image, setImage] = useState()
    const [indexImage, setIndexImage] = useState()

    function OnClick(image, index) {
        setIndexImage(index)
        setImage(image)
        setOpenModal(!openModal)
    }

    function saveDelete() {
        const newImgs = deleteImage(images, indexImage)
        setImages(newImgs);
        setOpenModal(false)
    }

    function ChangeInput(e) {
        const newImages = addImage(e, images)
        setImages(newImages);
    };

    return (
        <div className='cardContainer'>
            <label className="cardUpload" title='Agregar Imagen'>
                <div className='buttonsCardUpload'>
                    <img src={iconAddGalery} className='iconCardUpload' />
                    <input hidden type="file" accept='image/*' multiple onChange={ChangeInput}></input>
                </div>
            </label>
            {images.map((image, index) =>
                <div className="card" key={index}>
                    <img className="imageCard" src={image} />
                    <div className='buttonsCard'>
                        <button><a href={image} target="_blank"><FontAwesomeIcon className='iconCard' icon={faEye} title={'Abrir'} style={{ color: "#aede67" }} /></a></button>
                        <button onClick={OnClick.bind(this, image, index)}><FontAwesomeIcon className='iconCard' icon={faTrashAlt} title={'Eliminar'} style={{ color: "rgba(255, 75, 75, 0.8)" }} /></button>
                    </div>
                </div>
            )}

            {openModal ?
                <Modal open={openModal} setOpen={setOpenModal} Container={Delete} element={image} title="Confirmación" OnClick={saveDelete} />
                : null
            }
        </div>
    );
}