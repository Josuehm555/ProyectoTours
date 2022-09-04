import "./styles.css"

export default function Edit({defaultValue,id,label,disabled,onInputChange}) {

   
    return (
        <>
            <div className="input-group">
                <input onChange={onInputChange} name={id} disabled={disabled&&true} required id={id} type="text" className="inputSee" value={defaultValue} />
                {disabled?(
                <label  htmlFor={id} className="input-label-disabled">{label}</label>)
                :
                ( 
                <label  htmlFor={id} className="input-label">{label}</label>)}
            </div>
         
        </>
    );
}