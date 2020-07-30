import { useState, useEffect } from "react";
import { db } from "../firebase/utils";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = db
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        let documents = [];
        snapshot.forEach((doc) => {
          documents.push({ id: doc.id, ...doc.data() });
        });
        setDocs(documents);
      });
    return () => {
      unsub();
    };
  }, [collection]);

  return { docs };
};

export default useFirestore;
