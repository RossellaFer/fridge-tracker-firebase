import { db } from "../firebase-config";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const itemCollectionRef = collection(db, "items");

class ItemDataService {
  addItems = (newItem) => {
    return addDoc(itemCollectionRef, newItem);
  };

  updateItem = (id, updatedItem) => {
    const itemDoc = doc(db, "items", id);
    return updateDoc(itemDoc, updatedItem);
  };

  deleteItem = (id) => {
    const itemDoc = doc(db, "items", id);
    return deleteDoc(itemDoc);
  };

  getAllItems = () => {
    return getDocs(itemCollectionRef);
  };

  getItem = (id) => {
    const itemDoc = doc(db, "items", id);
    return getDoc(itemDoc);
  };
}
const itemDataService = new ItemDataService();
export default itemDataService;
