
import { initializeApp } from 'firebase/app';
import { getAuth,onAuthStateChanged,GoogleAuthProvider  } from 'firebase/auth';
import { signInWithPopup, signOut } from 'firebase/auth';
import { googleProvider } from './firebase'; // Adjust the path to your firebase.js file

const firebaseConfig = {
  apiKey: 'AIzaSyBbro5w2sXbt0iCPPKhbn4vTLGydg9L5C4',
  authDomain: 'timer-2c698.firebaseapp.com',
  projectId: 'timer-2c698',
  
};
const googleProvide = new GoogleAuthProvider();

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth,onAuthStateChanged,googleProvide };
