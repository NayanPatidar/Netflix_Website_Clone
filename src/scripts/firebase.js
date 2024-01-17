console.log("oko");
import { initializeApp } from '../../node_modules/firebase';
// import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAeiIfBlQUbRDqoDI6WZJnGLooYC3j4m-c",
    authDomain: "netflix-clone-47904.firebaseapp.com",
    projectId: "netflix-clone-47904",
    storageBucket: "netflix-clone-47904.appspot.com",
    messagingSenderId: "463765950759",
    appId: "1:463765950759:web:abfc296e2dfb6446ebd902",
    measurementId: "G-RS91PXQ42J"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

console.log(auth + " " + firebaseApp);

export { auth, firebaseApp };
