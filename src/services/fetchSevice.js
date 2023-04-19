import { auth, db } from '../config/firebase';
import {
  createUserWithEmailAndPassword,
  //   updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';

export async function signUp(data) {
  const { user } = await createUserWithEmailAndPassword(
    auth,
    data.email,
    data.password,
  );
  console.log(user);
  console.log(auth);
  const docRef = await addDoc(collection(db, 'users'), {
    name: data.name,
    email: data.email,
  });
  console.log('Document written with ID: ', docRef.id);
}

export async function logIn(data) {
  const { user } = await signInWithEmailAndPassword(
    auth,
    data.email,
    data.password,
  );
  console.log(user);
  console.log(auth);
}

export async function logOut() {
  await signOut(auth);
}
