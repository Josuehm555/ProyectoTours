import { faTrashAlt, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createImage, deleteData } from '../../services/index';
import iconAddGalery from '../../assets/addGalery.png';
import Spinner from '../../assets/spinner.gif';
import Delete from '../modals/galery/delete';
import Modal from '../modals/modal';
import Alert from '../alert/alert';
import { useState } from 'react';
import './styles.css';
import './sizes.css';

export default function Card({ images, loading, setLoading }) {
    const [openModal, setOpenModal] = useState(false);
    const [image, setImage] = useState();
    const [Deleted, setDeleted] = useState(false);
    const [Added, setAdded] = useState(false);
    const [ErrorMessage, setError] = useState(false);

    function OnClick(image) {
        setImage(image)
        setOpenModal(!openModal)
    }

    function saveDelete() {
        deleteData("galery", image.id, setDeleted, setError)
        setOpenModal(false)
    }

    const ChangeInput = (e) => {
        setLoading(true)
        createImage(e.target.files, setAdded, setError, setLoading)
    };

    return (
        <>
            <div className="Alerts">
                {Deleted ?
                    <Alert text="Se eliminó correctamente" setOpen={setDeleted} style={{ backgroundColor: "rgb(255, 81, 81)" }} />
                    : null
                }
                {Added ?
                    <Alert text="Se agregó correctamente" setOpen={setAdded} style={{ backgroundColor: "#3b97b7" }} />
                    : null
                }
                {ErrorMessage ?
                    <Alert text="No se completó la operación correctamente" setOpen={setError} style={{ backgroundColor: "rgb(255, 81, 81)" }} />
                    : null
                }
            </div>

            <h1 className='title'>Galería de eventos</h1>
            <div className='cardContainer'>
                <label className="cardUpload" title='Agregar Imagen'>
                    <div className='buttonsCardUpload'>
                        <img src={iconAddGalery} className='iconCardUpload' />
                        <input hidden type="file" accept='image/*' multiple onChange={ChangeInput}></input>
                    </div>
                </label>

                {loading ? 
                    <div className='spinner'><img src={Spinner} /></div>
                    : null
                }

                {images != null ?
                    images.map((image, index) =>
                        <div className="card" key={index}>
                            <img className="imageCard" src={image.url} />
                            <div className='buttonsCard'>
                                <button><a href={image.url} target="_blank"><FontAwesomeIcon className='iconCard' icon={faEye} title={'Abrir'} style={{ color: "#aede67" }} /></a></button>
                                <button onClick={OnClick.bind(this, image)}><FontAwesomeIcon className='iconCard' icon={faTrashAlt} title={'Eliminar'} style={{ color: "rgba(255, 75, 75, 0.8)" }} /></button>
                            </div>
                        </div>
                    )
                    : <div className='emptyCollection'><h1>No hay imagenes</h1></div>
                }

                {openModal ?
                    <Modal open={openModal} setOpen={setOpenModal} Container={Delete} element={image.url} title="Confirmación" OnClick={saveDelete} />
                    : null
                }
            </div>
        </>
    );
}