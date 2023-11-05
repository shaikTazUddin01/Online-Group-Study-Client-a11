import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/FireBase.config';

export const AuthContext = createContext(null)
// google provider
const provider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setuser] = useState()
    const [loader, setLoader] = useState(true)
    // handle Sign In
    const handleSignIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // handle Sign Up
    const handleSignUp = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // handle Google Sign In
    const handleGoogleSignIn = () => {
        setLoader(true)
        return signInWithPopup(auth, provider)
    }
    //handle sign out
    const handleSignOut = () => {
        return signOut(auth);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setuser(currentUser)
            setLoader(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])
    // useEffect(() => {
    //     const unSubscribe = onAuthStateChanged(auth, currentUser => {
    //         setUser(currentUser)
    //         setLoader(false)
    //     })
    //     return () => {
    //         unSubscribe();
    //     }

    // }, [])
    console.log(user)
    const AuthInFo = {
        handleSignIn,
        handleSignUp,
        handleGoogleSignIn,
        handleSignOut,
        user,
        loader

    }
    return <AuthContext.Provider value={AuthInFo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;