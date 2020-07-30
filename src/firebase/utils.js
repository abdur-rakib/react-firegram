import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

import config from "./config";

firebase.initializeApp(config);

const db = firebase.firestore();
const storage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, storage, timestamp };
