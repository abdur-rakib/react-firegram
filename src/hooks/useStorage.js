import { useState, useEffect } from "react";
import { storage, db, timestamp } from "../firebase/utils";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    //   references
    const storageRef = storage.ref(file.name);
    const collectionRef = db.collection("images");
    storageRef.put(file).on(
      "state_changed",
      (snapshot) => {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      () => {
        storageRef.getDownloadURL().then((url) => {
          setUrl(url);
          collectionRef.add({ url, createdAt: timestamp() });
        });
      }
    );
  }, [file]);
  return { progress, url, error };
};

export default useStorage;
