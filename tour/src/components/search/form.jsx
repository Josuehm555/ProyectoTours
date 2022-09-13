import './styles.css'
import Button from '../button/button';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const icon = <FontAwesomeIcon icon={faSearch}/>

export default function Form({ original, setList, title, itemsPerTable }) {
    
    const filter = (e) => {
        e.preventDefault();
        let wordFilter = document.getElementById("input").value
        let newList = []
        
        if(wordFilter === ''){
            setList([...original].slice(0, itemsPerTable));
        }
        else{
            for (let index = 0; index < original.length; index++) {
                let column_1 = original[index].column_1.toLowerCase()
                let column_2 = original[index].column_2.toLowerCase()
                let i = column_1.indexOf(wordFilter.toLowerCase())
                let j = column_2.indexOf(wordFilter.toLowerCase())
                
                if (i >= 0 || j >= 0 ) {
                    newList.push(original[index]);
                }
            }
            setList([...newList].slice(0, itemsPerTable));
        }
    }

    return (
        <form className="form" onSubmit={filter}>
            <input className='input' type="text" id="input" name="input" placeholder={"Buscar "+ title}/>
            <Button titulo={"Buscar"} icon={icon}/>
        </form>
    );
}