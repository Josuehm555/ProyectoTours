import './styles.css'
export default function Cancel({titulo, icon, OnClick, style}) {
    return (
             <button onClick={OnClick} className="buttonCancelStyle" style={style}>{icon} {titulo}</button>
       
    );
}