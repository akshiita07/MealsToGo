// react context
// retrieve restaurants from d specific cities & pass them by context
// service->context->app
import React, { useState, createContext, useEffect, useContext } from "react"

import { restaurantsRequest, restaurantsTransform } from "./restaurants.service"
import { LocationContext } from "../location/location.context"

export const RestaurantContext = createContext();

// it will wrap the app & provides it certain state
export const RestaurantContextProvider = ({ children }) => {

    const [restaurants, setRestaurants] = useState([]) //by def empty list
    const [isLoading, setIsLoading] = useState(false)  //by def we r not loading
    const [error, setError] = useState(null)       //by def we dont have any error
    const { location } = useContext(LocationContext)

    // fnc:
    const retrieveRestaurants = (loc) => {
        // we are now loading:
        setIsLoading(true)
        setRestaurants([]);     //first become null 
        setTimeout(() => {
            restaurantsRequest(loc).then(restaurantsTransform).then((results) => {
                setRestaurants(results);
                setIsLoading(false);
            }).catch(err => {
                setError(err);
                setIsLoading(false);
            })
        }, 2000)     //ie wait 2000ms=200s
    }

    useEffect(() => {
        if (location) {
            const locationString = `${location.lat},${location.lng}`
            console.log(locationString)
            retrieveRestaurants(locationString);
        }
    }, [location])

    return (
        <RestaurantContext.Provider
            value={
                {
                    restaurants,
                    isLoading,
                    error,
                }
            }
        >
            {children}
        </RestaurantContext.Provider>
    )
}