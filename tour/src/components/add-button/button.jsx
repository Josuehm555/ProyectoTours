import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Button({titulo, url}) {
    return (
        <button><FontAwesomeIcon icon={faPlus}/> Agregar {titulo}</button>
    );
}