import './styles.css'

export default function Alert({text}) {
    return (
        <div className='notification'>
            <p>{text}</p>
            <span className='progress'></span>
        </div>
    );
}