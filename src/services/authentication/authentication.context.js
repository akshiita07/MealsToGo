import React, { useState, createContext } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebase from "firebase/compat/app";
import { loginRequest } from "./authentication.service"

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const onLogin = (email, password) => {
        // trigger login fnc here:
        setIsLoading(true);
        loginRequest(email, password).then((userr) => {
            setUser(userr);
            setIsLoading(false);
        }).catch((err) => {
            setError(err);
            setIsLoading(false);
        })
    };
    return (
        <AuthenticationContext.Provider value={{ user, isLoading, error, onLogin, }}>
            {children}
        </AuthenticationContext.Provider>
    )
};