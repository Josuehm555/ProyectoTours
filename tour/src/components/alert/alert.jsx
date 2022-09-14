import { useEffect } from 'react';
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
            <button title='Cerrar' className='close-button' onClick={close}>X</button>
            <p>{text}</p>
            <span className='progress'></span>
        </div>
    );
}