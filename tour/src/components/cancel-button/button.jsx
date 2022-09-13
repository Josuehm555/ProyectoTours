import './styles.css'
export default function Cancel({titulo, icon, OnClick, style}) {
    return (
        <div className='container'>
             <button onClick={OnClick} className="buttonCancelStyle" style={style}>{icon} {titulo}</button>
        </div>
    );
}