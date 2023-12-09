import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
const provider = new GoogleAuthProvider();
import PropTypes from 'prop-types';
import axios from "axios";
const auth = getAuth(app)

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create user account
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in email and password
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign in with google
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // log Out 
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // user profile update
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    // onAuthStateChange
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            setUser(currentUser)

            if (currentUser) {
                axios.post('https://byteskill-server-ass12.vercel.app/jwt',
                    loggedUser,
                    {
                        withCredentials: true,
                    }
                )
                    .then(() => {
                        setLoading(false)
                    });
            } else {
                axios.post('https://byteskill-server-ass12.vercel.app/logout',
                    loggedUser,
                    {
                        withCredentials: true,
                    }
                )
                    .then(() => {
                        setLoading(false)
                    });
            }
        })
        return () => {
            return unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        logOut,
        updateUserProfile

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;