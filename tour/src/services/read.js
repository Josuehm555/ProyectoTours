import { getDocs, query, collection, orderBy } from "firebase/firestore";
import { db } from "./firebase-config";
import {
  createGaleryAdapter,
  createCategorieAdapter,
  createSubcategorieAdapter,
  createAdministratorAdapter,
  createPromotionAdapter,
  createGeneralInformationAdapter
} from "../adapters/index";


export const readData = async (collectionName, setLoading, setUpdatePagination) => {
  setUpdatePagination(true);
  try {
    const data = await getDocs(query(collection(db, collectionName), orderBy("name", "asc")));
    const information = iterateData(collectionName, data);
    setLoading(false)
    setUpdatePagination(false);
    return (information);
  }
  catch (error) {
    console.log(error)
  }
};

export const readGalery = async (setLoading) => {
  try {
    const data = await getDocs(query(collection(db, "galery"), orderBy("date", "desc")));
    const information = iterateData("galery", data);
    setLoading(false)
    return (information);
  }
  catch (error) {
    console.log(error)
  }
};

export const iterateData = (collectionName, data) => {
  if (data.docs.length > 0) { // Run only if exists data
    let information = [];
    let number = 1;
    data.forEach((doc) => {
      if (collectionName === "categories") {
        information.push(createCategorieAdapter(doc.id, doc.data(), number));
      }
      if (collectionName === "subcategories") {
        information.push(createSubcategorieAdapter(doc.id, doc.data(), number));
      }
      if (collectionName === "promotions") {
        information.push(createPromotionAdapter(doc.id, doc.data(), number));
      }
      if (collectionName === "administrators") {
        information.push(createAdministratorAdapter(doc.id, doc.data(), number));
      }
      if (collectionName === "galery") {
        information.push(createGaleryAdapter(doc.id, doc.data()));
      }
      if (collectionName === "general-information") {
        information.push(createGeneralInformationAdapter(doc.id, doc.data()));
      }
      number += 1;
    });
    return information
  }
  else {
    return null;
  }
}

export const readInformation = async (setSpinner) => {
  try {
    const data = await getDocs(query(collection(db, "general-information")));
    const information = iterateData("general-information", data);
    setSpinner(false);
    return information;
  }
  catch (error) {
    console.log(error);
  }
}