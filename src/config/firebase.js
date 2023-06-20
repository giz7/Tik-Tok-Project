import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBhris7HfeE43a6WrMaOv7mziBW0BQ6ZMU",
  authDomain: "tiktok---jornada-89080.firebaseapp.com",
  projectId: "tiktok---jornada-89080",
  storageBucket: "tiktok---jornada-89080.appspot.com",
  messagingSenderId: "658574837516",
  appId: "1:658574837516:web:10fb087e9e6495a1446b29"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
