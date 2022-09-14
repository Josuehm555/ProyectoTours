import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from '../services/firebase-config';
import Card from '../components/card-image/card';
import { readGalery } from '../services/read';
import { useEffect, useState } from 'react';

export default function Galery() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        update();
    }, [])

    const update = async () => {
        const snap = query(collection(db, "galery"));
        onSnapshot(snap, () => {
            let data = readGalery(setLoading);
            data.then(function (result) {
                if (data != null) {
                    setImages(result);
                }
            });
        });
    }

    return (
        <Card images={images} loading={loading} setLoading={setLoading} />
    );
}