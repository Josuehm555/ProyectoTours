import '../styles.css'

export default function See({ element }) {
    return (
        <div className="seeContainer">
            <p> Descripción: {element.column_2} </p>
            <div className="imagesModal">
                {element.images.map((image, key) =>
                    <a key={key} href={image} target="_blank"><img className='imageSee' src={image} /></a>
                )}
            </div>
        </div>
    );
}