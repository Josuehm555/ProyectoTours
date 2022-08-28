import './styles.css'

export default function Form({ original, setList, setLength }) {
    
    const filter = () => {
        let wordFilter = document.getElementById("input").value
        let newList = []
        
        if(wordFilter === ''){
            setLength(original.length);
            setList(original);
        }
        else{
            for (let index = 0; index < original.length; index++) {
                let column_1 = original[index].column_1.toLowerCase()
                let column_2 = original[index].column_2.toLowerCase()
                let column_3 = original[index].column_3.toLowerCase()
                let i = column_1.indexOf(wordFilter.toLowerCase())
                let j = column_2.indexOf(wordFilter.toLowerCase())
                let K = column_3.indexOf(wordFilter.toLowerCase())
                
                if (i >= 0 || j >= 0 || K >= 0) {
                    newList.push(original[index]);
                }
            }
            setLength(newList.length);
            setList(newList);
        }
    }

    return (
        <form>
            <input onChange={filter} type="text" id="input" name="input" placeholder='Buscar'/>
        </form>
    );
}