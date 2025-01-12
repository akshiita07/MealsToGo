﻿import React, { useState, useEffect } from "react"
import { locationRequest, locationTransform } from "./location.service"

export const LocationContext = React.createContext();

export const LocationContextProvider = ({ children }) => {

    const [location, setLocation] = useState(null) //by def null
    const [keyword, setKeyword] = useState("san_francisco") //by def take a loaction
    const [isLoading, setIsLoading] = useState(false)  //by def we r not loading
    const [error, setError] = useState(null)       //by def we dont have any error

    // search fnc :
    const onSearch = (searchKeyword) => {
        setIsLoading(true);
        setKeyword(searchKeyword);
        locationRequest(searchKeyword.toLowerCase()).then(locationTransform).then(result => {
            setLocation(result);
            console.log(result)
            setIsLoading(false);
        }).catch(error => {
            setIsLoading(false);
            setError(error);
        })
    }

    useEffect(() => {
        onSearch(keyword);
    }, [])

    return (
        <LocationContext.Provider
            value={
                {
                    location,
                    isLoading,
                    error,
                    search: onSearch,
                    keyword,
                }
            }
        >
            {children}
        </LocationContext.Provider>
    )
}