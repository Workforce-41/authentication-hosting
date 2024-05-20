import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYqpDntVUJOLN5-clYp4ZXUQjfaxg0vy8",
  authDomain: "project67890-25d86.firebaseapp.com",
  projectId: "project67890-25d86",
  storageBucket: "project67890-25d86.appspot.com",
  messagingSenderId: "471216780758",
  appId: "1:471216780758:web:cdfc862d8ffa25530d6077",
  measurementId: "G-6K7YLBHWFF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
