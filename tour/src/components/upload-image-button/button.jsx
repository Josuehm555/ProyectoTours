import { faUpload, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteImage } from '../../hooks/deleteImage';
import { addImage } from '../../hooks/addImages';
import './styles.css';

export default ({ images, setImages }) => {

    function changeInput(e) {
        const newImages = addImage(e, images)
        setImages(newImages)
    };

    function deleteImg(index) {
        const newImgs = deleteImage(images, index)
        setImages(newImgs);
    };

    return (
        <>
            <div className='upload_image'>
                <label className='upload_button' title='Cargar Imagen'>
                    <FontAwesomeIcon icon={faUpload} />
                    <span> Cargar Imagen </span>
                    <input hidden type="file" accept='image/*' multiple onChange={changeInput}></input>  
                </label>
            </div>
            <div className="image_container">
                {images.map((image, index) =>
                    <div key={index}>
                        <button title="Eliminar" onClick={deleteImg.bind(this, index)} className="modal_close_x">
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                        <img key={index} src={image.url} />
                    </div>
                )}
            </div>
        </>
    )
}