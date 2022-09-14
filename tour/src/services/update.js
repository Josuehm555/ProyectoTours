import { doc, updateDoc } from "firebase/firestore";
import { db, firebase } from "./firebase-config";

export const updateDataCategorie = async (collectionName, idRow, nameValue, descriptionValue, images, setLoading) => {
  try {
    let urls = [];
    Object.keys(images).forEach(async i => {
      try{
        const storageRef = firebase.storage().ref(collectionName);
        const archivoPath = storageRef.child(images[i].file.name);
        await archivoPath.put(images[i].file)
        await archivoPath.getDownloadURL()
          .then(async (url) => {
            urls.push(url);
            await updateDoc(doc(db, collectionName, idRow), { images: urls, name: nameValue, description: descriptionValue });
          })
      }
      catch{
        urls.push(images[i].url);
        await updateDoc(doc(db, collectionName, idRow), { images: urls, name: nameValue, description: descriptionValue  });
      }
      setLoading(false);
    });
  }
  catch (e) {
    console.log(e);
  }
};

export const updateDataSubategorie = async (collectionName, idRow, nameValue, descriptionValue, categoryValue) => {
  await updateDoc(doc(db, collectionName, idRow), {
    name: nameValue,
    description: descriptionValue,
    category: categoryValue
  });
};

export const updateDataAdmins = async (collectionName, idRow, nameValue, mailValue) => {
  await updateDoc(doc(db, collectionName, idRow), {
    name: nameValue,
    mail: mailValue
  });
};

export const updateDataInformation = async ( idRow, aboutus, email, facebook, instagram, phone, setError, setLoading, setUpdate ) => {
  try{
    await updateDoc(doc(db, "general-information", idRow), {
      aboutus: aboutus,
      email: email,
      facebook: facebook,
      instagram: instagram,
      phone: phone
    });
    setLoading(false);
    setUpdate(true);
  }
  catch{
    setError(true);
  }
};