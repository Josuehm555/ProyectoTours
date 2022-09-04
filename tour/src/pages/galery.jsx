import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Card from '../components/card-image/card';
import Image1 from '../assets/galery1.jpg'
import Image2 from '../assets/galery2.jpeg'
import { useState } from 'react';

export default function Galery() {
    const [images, setImages] = useState([Image1, Image2, Image1, Image2, Image1, Image2, Image1, Image2, Image1, Image2, Image1, Image2, Image1, Image2, Image1, Image2, Image1, Image2, Image1, Image2, Image1, Image2, Image1, Image2]);

    return (
        <>
            <h1>Galería de eventos</h1>
            <Card images={images} setImages={setImages}/>
        </>
    );
}