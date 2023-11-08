


import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
import "firebase/auth";
import Authentication from './Components/Authentication';

const firebaseConfig = {
  apiKey: 'AIzaSyBbro5w2sXbt0iCPPKhbn4vTLGydg9L5C4',
  authDomain: "timer-2c698.firebaseapp.com",
  projectId: "timer-2c698",
  storageBucket: "https://console.firebase.google.com/project/timer-2c698/storage/timer-2c698.appspot.com/files",
  messagingSenderId: "29052808649",
 
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
