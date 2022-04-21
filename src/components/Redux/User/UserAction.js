/* import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    updateProfile
} from "firebase/auth";
import firebaseConfig from "../../Authentication/firebase.config";
import initializeFirebase from "../../Authentication/firebase.init"; */
import {
    USER_REQUEST,
    USER_SUCCESS,
    USER_FAILURE,
    USER_SIGNOUT,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE
} from "./UserType";

//
export const userRequest = () => {
    return {
        type: USER_REQUEST,

    }
}
export const userSuccess = (user) => {
    return {
        type: USER_SUCCESS,
        payload: user

    }
}
export const userFailure = (error) => {
    return {
        type: USER_FAILURE,
        payload: error

    }
};
export const userSignOut = () => {
    return {
        type: USER_SIGNOUT,
    }
}
// log in
/* export const userLoginRequest = () => {
    return {
        type: USER_LOGIN_REQUEST,

    }
}
export const userLoginSuccess = (user) => {
    return {
        type: USER_LOGIN_SUCCESS,
        payload: user

    }
}
export const userLoginFailure = (error) => {
    return {
        type: USER_LOGIN_FAILURE,
        payload: error

    }
}; */

// const googleProvider = new GoogleAuthProvider();
// const auth = getAuth();
// initializeFirebase();

// email password registration
/* export const userRegistration = (email, password, name) => {
    console.log(email, password, name)
    return (dispatch) => {
        dispatch(useRequest)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {
                }).catch((error) => {
                    dispatch(useFailure(error.message))
                });
                dispatch(useSuccess(userCredential.user))
            })
            .catch((error) => {
                dispatch(useFailure(error.message))
            });

    }
} */
// email password Signin
const userSignin = (email, password) => {
    /*  return (dispatch) => {
         dispatch(userLoginRequest)
         createUserWithEmailAndPassword(auth, email, password)
             .then((userCredential) => {
                 const user = userCredential.user;
                 userLoginSuccess(user)
 
             })
             .catch((error) => {
                 userLoginFailure(error.message)
             });
 
     } */
}