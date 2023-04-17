// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAUsPOcrFl14_xa1vuB3znMPkg2JLR0ykw',
  authDomain: 'crm-test-task-632b5.firebaseapp.com',
  projectId: 'crm-test-task-632b5',
  storageBucket: 'crm-test-task-632b5.appspot.com',
  messagingSenderId: '875811705285',
  appId: '1:875811705285:web:7fefbb04955fff620ebbac',
  measurementId: 'G-4RJE7HY1NY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
