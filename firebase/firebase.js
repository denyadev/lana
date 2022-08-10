import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCxOS_YQagz3XZGRN0izra-d1WGrW9eVlg",
    authDomain: "lana-portfolio-bcb8b.firebaseapp.com",
    projectId: "lana-portfolio-bcb8b",
    storageBucket: "lana-portfolio-bcb8b.appspot.com",
    messagingSenderId: "138344500380",
    appId: "1:138344500380:web:0c19d9b8198cbea13ef159"
  };

export const app = initializeApp(firebaseConfig)
