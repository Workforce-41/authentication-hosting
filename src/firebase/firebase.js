import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA2bEeo4K7KGWOVvHfEnyTud6I1n_osnj0",
  authDomain: "wf41-ad0e9.firebaseapp.com",
  projectId: "wf41-ad0e9",
  storageBucket: "wf41-ad0e9.appspot.com",
  messagingSenderId: "1032457287021",
  appId: "1:1032457287021:web:e1c7e9d3e7b3555aa85664",
  measurementId: "G-P9N942XMX2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);



export { app, auth };
