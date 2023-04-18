import { auth } from '../config/firebase';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

export async function signUp(data) {
  const { user } = await createUserWithEmailAndPassword(
    auth,
    data.email,
    data.password,
  );
  console.log(user);
  console.log(auth);
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
