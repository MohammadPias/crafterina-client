import initializeFirebase from "./firebase.init";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import { userFailure, userRequest, userSignOut, userSuccess } from "../Redux/User/UserAction";
/* import {
    userFailure,
    userRequest,
    userSuccess
} from "../Redux/User/UserAction.js"; */


initializeFirebase();


const useFirebase = () => {
    const [user, setUser] = useState({})

    const dispatch = useDispatch()

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // google sign in
    const handleGoogleSignin = () => {
        dispatch(userRequest())
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user)
                dispatch(userSuccess(result.user))
            }).catch((error) => {
                dispatch(userFailure(error.message))
            });
    }

    // email pass sign up
    const handleRegistration = (email, password, name) => {
        dispatch(userRequest())
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {
                }).catch((error) => {
                    dispatch(userFailure(error.message))
                });
                dispatch(userSuccess(userCredential.user))
            })
            .catch((error) => {
                dispatch(userFailure(error.message))
            });
    }

    // email pass log in
    const handleLogin = (email, password) => {
        dispatch(userRequest())
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch(userSuccess(user))
            })
            .catch((error) => {
                dispatch(userFailure(error.message))
            });
    }

    // on auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                dispatch(userSuccess(user))
            }
            else {
                setUser({})
                // dispatch(userFailure())
            }
        })
        return () => unsubscribe;
    }, []);

    // handle sign out
    const handleSignOut = () => {
        signOut(auth).then(() => {
            dispatch(userSignOut())
            // Sign-out successful.
        }).catch((error) => {
            dispatch(userFailure(error.message))
            // An error happened.
        });
    }
    return {
        user,
        handleGoogleSignin,
        handleRegistration,
        handleLogin,
        handleSignOut
    }
};

export default useFirebase;