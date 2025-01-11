// react context
// retrieve restaurants from d specific cities & pass them by context
// service->context->app
import React, { useState, createContext, useEffect, useMemo } from "react"

import { restaurantsRequest, restaurantsTransform } from "./restaurants.service"


export const RestaurantContext = createContext();

// it will wrap the app & provides it certain state
export const RestaurantContextProvider = ({ children }) => {

    const [restaurants, setRestaurants] = useState([]) //by def empty list
    const [isLoading, setIsLoading] = useState(false)  //by def we r not loading
    const [error, setError] = useState(null)       //by def we dont have any error

    // fnc:
    const retrieveRestaurants = () => {
        // we are now loading:
        setIsLoading(true)
        setTimeout(() => {
            restaurantsRequest().then(restaurantsTransform).then((results) => {
                setRestaurants(results);
                setIsLoading(false);
            }).catch(err => {
                setError(err);
                setIsLoading(false);
            })
        }, 2000)     //ie wait 2000ms=200s
    }

    useEffect(() => {
        retrieveRestaurants();
    }, [])

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