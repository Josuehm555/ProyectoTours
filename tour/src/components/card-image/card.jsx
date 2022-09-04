import { useState } from 'react';
import Modal from '../modals/modal'
import Delete from '../modals/galery/delete';
import iconAddGalery from '../../assets/addGalery.png'
import { faTrashAlt, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css'

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
        const newImgs = []
        images.map((element, index) => {
            if (index !== indexImage) {
                newImgs.push(element)
            }
        });
        setImages(newImgs);
        setOpenModal(false)
    }

    function changeInput(e) {
        let indexImg;

        if (images.length > 0) {
            indexImg = images[images.length - 1].index + 1;
        } else {
            indexImg = 0;
        }

        let newImgsToState = readmultifiles(e, indexImg);
        let newImgsState = [...newImgsToState, ...images];
        setImages(newImgsState);
    };

    function readmultifiles(e, indexInicial) {
        const files = e.currentTarget.files;
        const arrayImages = [];

        Object.keys(files).forEach((i) => {
            const file = files[i];
            let url = URL.createObjectURL(file);

            arrayImages.push(url);
            indexInicial++;
        });
        return arrayImages;
    }

    return (
        <div className='cardContainer'>
            <label className="cardUpload" title='Agregar Imagen'>
                <div className='buttonsCardUpload'>
                    <img src={iconAddGalery} className='iconCardUpload' />
                    <input hidden type="file" accept='image/*' multiple onChange={changeInput}></input>
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