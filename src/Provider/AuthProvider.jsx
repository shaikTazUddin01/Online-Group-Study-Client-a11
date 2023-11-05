import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { Children, createContext, useEffect, useState } from 'react';
import auth from '../Firebase/FireBase.config';

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setuser] = useState()
    const handleSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const handleSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const provider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
       return signInWithPopup(auth, provider)
    }
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
           if (currentUser) {
            setuser(currentUser)
           }
        })
        return () =>{
        unSubscribe()
        }
    },[])
    console.log(user)
    const AuthInFo = {
        handleSignIn,
        handleSignUp,
        user,
        handleGoogleSignIn
    }
    return <AuthContext.Provider value={AuthInFo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;