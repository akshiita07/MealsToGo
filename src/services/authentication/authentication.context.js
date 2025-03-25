import React, { useState, createContext } from "react";
import { loginRequest } from "./authentication.service";
import firebase from "firebase/compat/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"; // ✅ Import Firebase Auth methods


export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

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
        const auth = getAuth();
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

    return (
        <AuthenticationContext.Provider
            value={{
                isAuthenticated: !!user,
                user,
                isLoading,
                error,
                onLogin,
                onRegister,
            }}>
            {children}
        </AuthenticationContext.Provider>
    );
};
