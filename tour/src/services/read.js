import { getDocs, query, collection } from "firebase/firestore";
import { createCategorieAdapter } from "../adapters/categorie-adapter";
import { db } from "./firebase-config";

export const readData = async (collectionName) => {
  try {
    const data = await getDocs(query(collection(db, collectionName))); //firebase object
    let information = {"data":[]};
    data.forEach((doc) => {
      if (collectionName === "categories") {
        information.data.push(createCategorieAdapter(doc.id, doc.data())); // firebase object to javascript object
      }    
    });
    return(information)
  } catch (error) {
    console.log(error)
  }
};