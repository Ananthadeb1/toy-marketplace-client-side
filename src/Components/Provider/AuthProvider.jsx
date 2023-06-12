import { createContext, useEffect, useState } from "react";
import { app } from "../../firebase.init";
import{createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"

const auth = getAuth(app)
export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {


   const [user , setUser ] = useState(null);

   const createUser = (email, password) => {
    // setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
}

const signIn = (email, password) => {
    // setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}

const logOut = () =>{
    return signOut(auth);
}

useEffect( ()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        // setLoading(false);
    });

    // stop observing while unmounting 
    return () =>{
        return unsubscribe();
    }
}, [])

const authInfo = {
    user,
    // loading,
    createUser,
    signIn,
    logOut
}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
        </div>
    );
};


export default AuthProvider;