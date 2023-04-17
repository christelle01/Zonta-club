import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { DB } from "../../contexts/FirebaseContext";

export const saveForm = async ({ values, callback, onError }) => {
  try {
    const dbRef = collection(DB, "users");
    const add = await addDoc(dbRef, values);
    if (callback) callback(add.id);
  } catch (error) {
    if (onError) onError(error);
    console.log(error);
  }
};

export const checkUser = async ({ email, callback, onError }) => {
  try {
    const dbRef = collection(DB, "users");
    const querySnap = query(dbRef, where("personal.email", "==", email));

    const result = await getDocs(querySnap);

    let data = [];

    if (!result.empty) {
      data = result.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    }

    if (callback) callback(data);
  } catch (error) {
    if (onError) onError(error);
    console.log(error);
  }
};
