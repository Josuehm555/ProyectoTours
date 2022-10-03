import { useEffect } from 'react';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css'

export default function Alert({ text, setOpen, style }) {
    useEffect(() => {
        setTimeout(close, 3500);
    }, [])

    function close (){
        setOpen(false)
    }

    return (
        <div className='notification' style={style}>
            <button title='Cerrar' className='close-button' onClick={close}>
            <FontAwesomeIcon  className='xClose' icon={faXmark} />
            </button>
            <p>{text}</p>
        </div>
    );
}