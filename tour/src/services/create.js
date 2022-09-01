import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";

export const createData = async (collectionName, newData) => {
    //Formato: { nombreDeCampo: valor, ...}
    await setDoc(doc(collection(db, collectionName)), newData);
};