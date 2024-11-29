import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import app from "../firebase.config";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const register = (email, password) => createUserWithEmailAndPassword(auth, email, password);
export const googleLogin = () => signInWithPopup(auth, googleProvider);
export const logout = () => signOut(auth);
