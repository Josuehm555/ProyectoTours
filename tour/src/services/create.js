import { collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { db, db2, firebase } from "./firebase-config";

export const createData = async (collectionName, newData) => {
    await setDoc(doc(collection(db, collectionName)), newData);
};

export const createImage = async (images, setAdd, setError, setLoading) => {
    try {
        const date = firebase.firestore.Timestamp.now().toDate()

        Object.keys(images).forEach(async i => {
            const storageRef = firebase.storage().ref('galery');
            const archivoPath = storageRef.child(images[i].name);
            await archivoPath.put(images[i])
            await archivoPath.getDownloadURL()
                .then(async (url) => {
                    setDoc(doc(collection(db, "galery")), { "url": url, "date": date });
                });
            setAdd(true)
            setLoading(false)
        })
    }
    catch (e) {
        console.log(e);
        setError(true)
    }
};

export const UploadImages = async (collectionName, name, description, images, setLoading) => {
    try {
        let urls = [];
        const data = {'name':name, 'description':description, 'images': urls};
        const newDoc = await db2.collection(collectionName).add(data);
        const id = newDoc.id

        Object.keys(images).forEach(async i => {
            const storageRef = firebase.storage().ref(collectionName);
            const archivoPath = storageRef.child(images[i].file.name);
            await archivoPath.put(images[i].file)
            await archivoPath.getDownloadURL()
                .then(async (url) => {
                    urls.push(url);
                    await updateDoc(doc(db, collectionName, id), { images: urls });
                })
            });
            setLoading(false);
    }
    catch (e) {
        console.log(e);
    }
};