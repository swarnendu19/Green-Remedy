import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBF-kcO-bwUbVj8mFJC97Kd08GOQU7Ut-M",
  authDomain: "mern-ecommerce2024-6e757.firebaseapp.com",
  projectId: "mern-ecommerce2024-6e757",
  storageBucket: "mern-ecommerce2024-6e757.appspot.com",
  messagingSenderId: "886262952642",
  appId: "1:886262952642:web:d299ae702b2b7cedb5015b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
