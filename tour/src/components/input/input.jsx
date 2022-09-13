import "./styles.css"

export default function Input({ defaultValue, id, label, onInputChange }) {

    return (
        <div className="input-group">
            <input onChange={onInputChange} name={id} required id={id} type="text" className="inputSee" value={defaultValue} />
            <label htmlFor={id} className="input-label">{label}</label>
        </div>
    );
}