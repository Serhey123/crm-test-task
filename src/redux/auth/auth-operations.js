import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth, db, provider } from '../../config/firebase';
import axios from 'axios';
import { collection, addDoc } from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

export const signUp = createAsyncThunk('auth/register', async data => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password,
    );
    await updateProfile(auth.currentUser, {
      displayName: data.name,
    });
    const docRef = await addDoc(collection(db, 'users'), {
      name: data.name,
      email: data.email,
    });
    console.log('Document written with ID: ', docRef.id);

    return user;
  } catch (error) {
    throw new Error(error);
  }
});

export const logIn = createAsyncThunk('auth/login', async data => {
  try {
    const { user } = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password,
    );
    return user;
  } catch (error) {
    throw new Error(error);
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw new Error(error);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/currentUser',
  async token => {
    try {
      const { data } = await axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAUsPOcrFl14_xa1vuB3znMPkg2JLR0ykw',
        {
          idToken: token,
        },
      );

      return data.users[0];
    } catch (error) {
      throw new Error(error);
    }
  },
);

export const logInWithGoogle = createAsyncThunk('auth/login', async () => {
  try {
    const { user } = await signInWithPopup(auth, provider);

    return user;
  } catch (error) {
    throw new Error(error);
  }
});
