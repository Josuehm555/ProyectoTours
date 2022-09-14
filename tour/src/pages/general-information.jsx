import { collection, onSnapshot, query } from "firebase/firestore";
import Information from '../components/information/information'
import { readInformation } from "../services/read";
import { db } from '../services/firebase-config';
import { useEffect, useState } from "react";
import Spinner from '../assets/spinner.gif';

export default function GeneralInformation() {

    const [information, setInformation] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        update();
    }, [])

    const update = async () => {
        const snap = query(collection(db, "general-information"));
        onSnapshot(snap, () => {
            const data = readInformation(setLoading);
            data.then(function (result) {
                if (data !== null) {
                    setInformation(result[0]);
                }
            });
        });
    }

    return (
        <div className="information">
            <h1 className="title">Información General</h1>
            {loading ?
                <div className='informationSpinner'><img src={Spinner} /></div>
                :
                <Information information={information} />
            }
        </div>
    );
}
