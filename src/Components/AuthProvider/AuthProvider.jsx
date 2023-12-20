import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import app from "../../Firebase/firebase.config";
import {  FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const[loading, setLoading] = useState(true);
    
    
//Create new User
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };
//Log in
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //Google sign in
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    

    //Github login
    const signInWithGithub = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    // Facebook login
    const signInWithFacebook = () => {
        setLoading(true)
        return signInWithPopup(auth, facebookProvider)
    }

    // update profile
    const handleUpdateProfile = (name,photoUrl ) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
             photoURL:photoUrl
        } )
    }

//signOut
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
// Using observer
    useEffect(()=> {
       const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false)
            // console.log("Observing ", currentUser);
        });
        return() => {
            unSubscribe()
        }
    },[])

    const authInfo = {
        user,loading, createUser, logIn,signInWithGoogle,signInWithGithub,signInWithFacebook,handleUpdateProfile, logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node
}