import React, { useState, useEffect, createContext } from "react";
import { loginRequest } from "./authentication.service";
import firebase from "firebase/compat/app";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    // when i reload i want current user session to remain active so use firebase hook:
    const auth = getAuth();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setIsLoading(false); // ✅ Set loading false after user state check
        });

        return unsubscribe; // ✅ Properly cleanup listener
    }, []);

    //function for log in
    const onLogin = (email, password) => {
        setIsLoading(true);
        loginRequest(email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setIsLoading(false);
            });
    };

    //function for register
    const onRegister = (email, password, repeatedPassword) => {
        // firebase method to create a user:
        // const auth = getAuth();
        if (password !== repeatedPassword) {
            setError("Error: Passwords do not match");
            return;
        }
        setIsLoading(true);

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setIsLoading(false);
            });
    };

    // a log out function:
    const onLogout = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
            })
            .catch((err) => {
                setError(err.message);
            });
    };

    return (
        <AuthenticationContext.Provider
            value={{
                isAuthenticated: !!user,
                user,
                isLoading,
                error,
                onLogin,
                onRegister,
                onLogout,
            }}>
            {children}
        </AuthenticationContext.Provider>
    );
};
