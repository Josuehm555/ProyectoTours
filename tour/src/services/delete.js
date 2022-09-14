import { doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase-config";

// Parameters: name of collection, Row id to delete
export const deleteData = async (collectionName, idRow, setDelete, setError) => {
    try{
        await deleteDoc(doc(db, collectionName, idRow));
        setDelete(true)
    }
    catch(e){
        console.log(e)
        setError(true)
    }
};