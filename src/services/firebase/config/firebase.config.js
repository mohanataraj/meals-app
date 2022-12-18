import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  writeBatch,
  doc,
  query,
  getDocs,
} from "firebase/firestore";
// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyA8o3m-MDV0Cap-9HvPKf07xCLdzyVfM2U",
  authDomain: "mealstogo-36893.firebaseapp.com",
  projectId: "mealstogo-36893",
  storageBucket: "mealstogo-36893.appspot.com",
  messagingSenderId: "288995050543",
  appId: "1:288995050543:web:0ed7bbd0c9e54384d5f2da",
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore();

console.log("db :", db);

export const addCollection = async (collectionKey, arrayToAdd) => {
  const collectionRef = collection(db, collectionKey);
  try {
    arrayToAdd.forEach(async (item) => {
      await addDoc(collectionRef, item).then((docRef) => {
        console.log(docRef.id, "added successfully");
      });
    });
  } catch (error) {
    console.log("write failed", error);
  } finally {
    console.log("write done!!!");
  }
};

export const addCollectionAndDoc = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  try {
    objectsToAdd.forEach((object) => {
      const docRef = doc(collectionRef, object.name);
      batch.set(docRef, object);
    });
  } catch (error) {
    console.log(error);
  } finally {
    await batch.commit();
    console.log("commit done !");
  }
};

export const getCollectionAndDocs = async (collectionKey) => {
  const collectionRef = collection(db, collectionKey);
  const q = query(collectionRef);

  const querySnapShot = await getDocs(q);
  const favouritesArray = querySnapShot.docs.map((doc) => doc.data());
  console.log(favouritesArray);
};
