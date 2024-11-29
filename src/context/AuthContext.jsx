import { createContext, useContext, useState, useEffect } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth();
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        localStorage.setItem("user", JSON.stringify(currentUser));
      } else {
        setUser(null);
        localStorage.removeItem("user");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  const login = async (email, password) => {
    await setPersistence(auth, browserLocalPersistence);
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  };

  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, googleLogin, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
