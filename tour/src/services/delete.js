import { doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase-config";

// Parameters: name of collection, Row id to delete
export const deleteData = async (collectionName, idRow) => {
    await deleteDoc(doc(db, collectionName, idRow));
};