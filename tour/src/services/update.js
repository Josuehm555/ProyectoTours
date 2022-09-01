import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase-config";

//Parameters: collection name, row id to update, new value of column name, new value of column description
export const updateDataCategorie = async (collectionName, idRow, nameValue, descriptionValue) => {
  await updateDoc(doc(db, collectionName, idRow), {
    nombre: nameValue,
    description: descriptionValue,
  });
};