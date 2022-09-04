import './styles.css'
export default function Button({titulo, icon, OnClick, style}) {
    return (
        <button onClick={OnClick} className="buttonStyle" style={style}>{icon} {titulo}</button>
    );
}